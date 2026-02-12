import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="font-bold text-2xl mb-4 text-gray-900">
              MagnusBets
            </div>
            <p className="text-gray-600 max-w-md">
              Quantitative sports betting picks powered by statistical models.
              We provide actionable NBA predictions with verified track record.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                Discord
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                Telegram
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Today's Picks</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Track Record</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Responsible Gambling</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MagnusBets. All rights reserved. This site is for informational purposes only. Must be 21+ to gamble.</p>
          <p className="mt-2">Odds subject to change. Past performance does not guarantee future results.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;