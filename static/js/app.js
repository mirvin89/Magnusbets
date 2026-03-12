// MagnusBets App.js
// Replace placeholders with your actual keys
const SUPABASE_URL = &#x27;https://YOUR_PROJECT.supabase.co&#x27;;
const SUPABASE_ANON_KEY = &#x27;your-anon-public-key&#x27;;
const STRIPE_PUBLISHABLE_KEY = &#x27;pk_test_YOUR_STRIPE_PK&#x27;;
const STRIPE_PRICE_ID = &#x27;price_29mo_subscription_id&#x27;;

// Init
const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);

// Elements
const authBtn = document.getElementById(&#x27;authBtn&#x27;);
const logoutBtn = document.getElementById(&#x27;logoutBtn&#x27;);
const userEmail = document.getElementById(&#x27;userEmail&#x27;);
const authModal = document.getElementById(&#x27;authModal&#x27;);
const authForm = document.getElementById(&#x27;authForm&#x27;);
const subscribeBtns = document.querySelectorAll(&#x27;[id^=&quot;subscribe&quot;]&#x27;);
const paywall = document.getElementById(&#x27;paywall&#x27;);
const dashboardContent = document.getElementById(&#x27;dashboardContent&#x27;);
const picksGallery = document.getElementById(&#x27;picksGallery&#x27;);
const teaserPicks = document.getElementById(&#x27;teaserPicks&#x27;);
const roi30 = document.getElementById(&#x27;roi30&#x27;);
const roiYTD = document.getElementById(&#x27;roiYTD&#x27;);
const winRate = document.getElementById(&#x27;winRate&#x27;);
const roiChartEl = document.getElementById(&#x27;roiChart&#x27;);

// Auth Modal
const closeModal = document.getElementById(&#x27;closeModal&#x27;);
const signUpBtn = document.getElementById(&#x27;signUpBtn&#x27;);
let isSignUp = false;

// Init on load
document.addEventListener(&#x27;DOMContentLoaded&#x27;, initApp);

async function initApp() {
    await checkAuth();
    loadPicks();
    if (window.location.pathname.includes(&#x27;dashboard.html&#x27;)) {
        await checkSubscription();
        updateROI();
    }
    setupEventListeners();
}

function setupEventListeners() {
    if (authBtn) authBtn.addEventListener(&#x27;click&#x27;, toggleAuthModal);
    if (logoutBtn) logoutBtn.addEventListener(&#x27;click&#x27;, logout);
    if (closeModal) closeModal.addEventListener(&#x27;click&#x27;, toggleAuthModal);
    if (authModal) authModal.addEventListener(&#x27;click&#x27;, (e) =&gt; { if (e.target === authModal) toggleAuthModal(); });
    if (signUpBtn) signUpBtn.addEventListener(&#x27;click&#x27;, () =&gt; { isSignUp = !isSignUp; updateAuthForm(); });
    subscribeBtns.forEach(btn =&gt; btn.addEventListener(&#x27;click&#x27;, handleSubscribe));
    if (authForm) authForm.addEventListener(&#x27;submit&#x27;, handleAuth);
}

async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        if (userEmail) userEmail.textContent = session.user.email;
        if (authBtn) authBtn.textContent = &#x27;Dashboard&#x27;;
        authBtn?.addEventListener(&#x27;click&#x27;, () =&gt; window.location.href = &#x27;dashboard.html&#x27;);
    } else {
        if (authBtn) authBtn.textContent = &#x27;Sign In&#x27;;
    }
    supabase.auth.onAuthStateChange(checkAuth);
}

function toggleAuthModal() {
    authModal.classList.toggle(&#x27;hidden&#x27;);
    if (!authModal.classList.contains(&#x27;hidden&#x27;)) {
        document.getElementById(&#x27;email&#x27;)?.focus();
    }
}

function updateAuthForm() {
    const btn = authForm.querySelector(&#x27;button[type=&quot;submit&quot;]&#x27;);
    btn.textContent = isSignUp ? &#x27;Sign Up&#x27; : &#x27;Sign In&#x27;;
}

async function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById(&#x27;email&#x27;).value;
    const password = document.getElementById(&#x27;password&#x27;).value;
    const { data, error } = isSignUp 
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else toggleAuthModal();
}

async function logout() {
    await supabase.auth.signOut();
    window.location.href = &#x27;/&#x27;;
}

async function handleSubscribe() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        toggleAuthModal();
        return;
    }
    const { data: profile } = await supabase.from(&#x27;profiles&#x27;).select(&#x27;subscribed&#x27;).eq(&#x27;id&#x27;, session.user.id).single();
    if (profile?.subscribed) {
        window.location.href = &#x27;dashboard.html&#x27;;
        return;
    }
    // Stripe Checkout
    const {error: stripeError} = await stripe.redirectToCheckout({
        lineItems: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
        mode: &#x27;subscription&#x27;,
        successUrl: `${window.location.origin}/dashboard.html?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}${window.location.pathname}?cancelled=true`,
    });
    if (stripeError) alert(stripeError.message);
}

async function checkSubscription() {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get(&#x27;session_id&#x27;);
    if (sessionId) {
        try {
            const {session: stripeSession} = await stripe.retrieveCheckoutSession(sessionId);
            if (stripeSession?.subscription?.status === &#x27;active&#x27;) {
                const { data: { session } } = await supabase.auth.getSession();
                if (session) {
                    // Update profile (create profiles table in Supabase)
                    await supabase.from(&#x27;profiles&#x27;).upsert({
                        id: session.user.id,
                        updated_at: new Date().toISOString(),
                        subscribed: true,
                        stripe_sub_id: stripeSession.subscription.id
                    });
                }
            }
        } catch (err) {
            console.error(&#x27;Stripe verification failed&#x27;, err);
        }
    }
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        return showPaywall();
    }
    const { data: profile } = await supabase.from(&#x27;profiles&#x27;).select(&#x27;subscribed&#x27;).eq(&#x27;id&#x27;, session.user.id).single();
    if (profile?.subscribed) {
        paywall.classList.add(&#x27;hidden&#x27;);
        dashboardContent.classList.remove(&#x27;hidden&#x27;);
    } else {
        showPaywall();
    }
}

function showPaywall() {
    paywall.classList.remove(&#x27;hidden&#x27;);
    dashboardContent.classList.add(&#x27;hidden&#x27;);
}

async function loadPicks() {
    let limit = 6;
    const { data: { session } } = await supabase.auth.getSession();
    const { data: profile } = await supabase.from(&#x27;profiles&#x27;).select(&#x27;subscribed&#x27;).eq(&#x27;id&#x27;, session?.user?.id).single();
    if (picksGallery &amp;&amp; profile?.subscribed) limit = 50;
    const { data: picks, error } = await supabase
        .from(&#x27;picks&#x27;)
        .select(&#x27;*&#x27;)
        .order(&#x27;date&#x27;, { ascending: false })
        .limit(limit);
    if (error) {
        console.error(error);
        return;
    }
    displayPicks(picks || []);
}

function displayPicks(picks) {
    const container = picksGallery || teaserPicks;
    if (!container) return;
    container.innerHTML = picks.map(pick =&gt; `
        &lt;div class=&quot;bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all hover:scale-105&quot;&gt;
            &lt;h4 class=&quot;font-bold text-lg mb-2&quot;&gt;${pick.match}&lt;/h4&gt;
            &lt;p class=&quot;text-orange-400 mb-1&quot;&gt;${pick.sport} | ${pick.date}&lt;/p&gt;
            &lt;p class=&quot;font-semibold mb-2&quot;&gt;${pick.pick} @ ${pick.odds}&lt;/p&gt;
            &lt;div class=&quot;flex justify-between items-center&quot;&gt;
                ${pick.result === &#x27;win&#x27; ? &#x27;&lt;span class=&quot;px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold&quot;&gt;WIN&lt;/span&gt;&#x27; : 
                  pick.result === &#x27;loss&#x27; ? &#x27;&lt;span class=&quot;px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold&quot;&gt;LOSS&lt;/span&gt;&#x27; :
                  &#x27;&lt;span class=&quot;px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm&quot;&gt;PENDING&lt;/span&gt;&#x27;}
                &lt;span class=&quot;font-bold ${pick.roi &gt; 0 ? &#x27;text-green-400&#x27; : &#x27;text-red-400&#x27;}&quot;&gt;${pick.roi.toFixed(1)}%&lt;/span&gt;
            &lt;/div&gt;
            ${pick.notes ? `&lt;p class=&quot;mt-3 text-sm text-gray-400&quot;&gt;${pick.notes}&lt;/p&gt;` : &#x27;&#x27;}
        &lt;/div&gt;
    `).join(&#x27;&#x27;);
}

async function updateROI() {
    const { data: picks } = await supabase.from(&#x27;picks&#x27;).select(&#x27;*&#x27;).order(&#x27;date&#x27;);
    if (!picks || picks.length === 0) return;
    // Simple ROI calcs - improve as needed
    const thirtyDaysAgo = new Date(Date.now() - 30*24*60*60*1000);
    const thirtyPicks = picks.filter(p =&gt; new Date(p.date) &gt; thirtyDaysAgo &amp;&amp; p.result !== &#x27;pending&#x27;);
    const roi30Avg = thirtyPicks.reduce((sum, p) =&gt; sum + p.roi, 0) / (thirtyPicks.length || 1);
    roi30.textContent = `+${roi30Avg.toFixed(1)}%`;

    // YTD
    const ytd = new Date(new Date().getFullYear(), 0, 1);
    const ytdPicks = picks.filter(p =&gt; new Date(p.date) &gt;= ytd &amp;&amp; p.result !== &#x27;pending&#x27;);
    const roiYTDAvg = ytdPicks.reduce((sum, p) =&gt; sum + p.roi, 0) / (ytdPicks.length || 1);
    roiYTD.textContent = `+${roiYTDAvg.toFixed(1)}%`;

    // Win rate
    const wins = picks.filter(p =&gt; p.result === &#x27;win&#x27;).length;
    const total = picks.filter(p =&gt; p.result !== &#x27;pending&#x27;).length;
    winRate.textContent = `${((wins / total)*100).toFixed(1)}%`;

    // Chart
    if (roiChartEl) {
        const ctx = roiChartEl.getContext(&#x27;2d&#x27;);
        new Chart(ctx, {
            type: &#x27;line&#x27;,
            data: {
                labels: picks.slice(0,20).map(p =&gt; new Date(p.date).toLocaleDateString()),
                datasets: [{
                    label: &#x27;Cumulative ROI&#x27;,
                    data: picks.slice(0,20).map((p,i) =&gt; picks.slice(0,i+1).reduce((sum,r) =&gt; sum + r.roi, 0)),
                    borderColor: &#x27;#f97316&#x27;,
                    backgroundColor: &#x27;rgba(249, 115, 22, 0.2)&#x27;,
                    tension: 0.4
                }]
            },
            options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
    }
}
