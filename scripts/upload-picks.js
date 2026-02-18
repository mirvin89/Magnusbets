const fs = require(&#x27;fs&#x27;);
const { createClient } = require(&#x27;@supabase/supabase-js&#x27;);

const supabaseUrl = &#x27;https://YOUR_PROJECT.supabase.co&#x27;;
const supabaseServiceKey = &#x27;your-service-role-key&#x27;; // Full access key from Supabase &gt; Settings &gt; API

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function uploadPicks(csvPath = &#x27;/path/to/picks.csv&#x27;) {
    try {
        const csv = fs.readFileSync(csvPath, &#x27;utf8&#x27;);
        const lines = csv.trim().split(&#x27;\n&#x27;).slice(1); // Skip header
        const picks = lines.map(line =&gt; {
            const cols = line.split(&#x27;,&#x27;);
            return {
                date: cols[0],
                sport: cols[1],
                match: cols[2],
                pick: cols[3],
                odds: parseFloat(cols[4]),
                stake: parseFloat(cols[5]),
                result: cols[6],
                roi: parseFloat(cols[7]),
                notes: cols[8] || &#x27;&#x27;
            };
        }).filter(p =&gt; p.roi !== undefined); // Valid rows

        const { data, error } = await supabase
            .from(&#x27;picks&#x27;)
            .upsert(picks, { onConflict: &#x27;date,sport,match&#x27; });

        if (error) throw error;
        console.log(`Uploaded ${picks.length} picks successfully.`);
    } catch (error) {
        console.error(&#x27;Upload failed:&#x27;, error.message);
    }
}

uploadPicks(process.argv[2] || &#x27;data/picks.csv&#x27;);