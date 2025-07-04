import React from 'react';
import { BlogPostData } from '@/components/BlogPost';

export const blogPosts: BlogPostData[] = [
  {
    id: 'macroeconomic-signal-engine',
    title: 'Building a Macroeconomic Signal Engine: From Raw Data to Portfolio Signals',
    subtitle: 'Introduction',
    date: 'July 4, 2025',
    readTime: '8 min',
    featured: true,
    tags: ['Data Science', 'Finance', 'Python', 'Machine Learning'],
    content: (
      <div>
        <p className="mb-6">
          There is a constant inflow of macroeconomic data, from consumer price indices to unemployment rates and GDP growth rates. <br/><br/>Tracking and reading these trends is such a difficult task to take on manually, which is why I built this signal engine to analyze and explore how macroeconomic indicators can be translated into investment signals across major asset classes specifically focusing on stocks, bonds, and currencies.       
        </p>

        <p className="mb-6">
          The key ideas explored here include a general understanding of the performance of the economy looking at these macro indicators, translating these into investment insights and testing whether these insights would have worked historically.
        </p>
        
        <p className="text-xl font-semibold mb-4 text-black">The Problem with Macroeconomic Data</p>
        <p className="mb-6">
          Interpreting macroeconomic data is tricky because the data is lagging, noisy, and most often reported in different formats. Even more difficult is trying to compare and model all these data together; while unemployment rate and Consumer Price Index (CPI) are reported monthly, GDP growth rates are reported quarterly.
        </p>
        <p className="mb-6">
          Also, there is no clean signal in one single release, but rather the bigger trend of all the data. Most retail investors in general often either overreact to one data point or completely ignore other important signals altogether.
        </p>
        
        <p className="text-xl font-semibold mb-4 text-black">How the Signal Builder Works</p>
        <p className='mb-4 text-lg font-semibold'>Data Collection</p>
        <p className="mb-6">
          The four macro indicators used in this project are GDP growth rate, which gives an overall economic picture of the economy, Consumer Price Index, to give an idea of the price levels in the economy, unemployment rate to gauge the labor market strength, and the Federal Funds rate, to provide information on monetary policy stance.<br/><br/> All this data was collected from the Federal Reserve Bank of St. Louis through the Fred API.
        </p>
        <p className="mb-6">
          The asset classes used here span stocks (SPY, QQQ), bonds (TLT, HYG), the dollar (UUP), and commodities (GLD).
        </p>
        
        <p className='mb-4 text-lg font-semibold'>Data Preprocessing</p>
        <p className="mb-6">
          Each data source had unique quirks; varying reporting periods, missing values, and inconsistent timelines. To align them, GDP growth was repeated monthly within each reported quarter, and asset classes with differing start dates were consolidated into a unified dataset from 2008 to 2025. CPI was converted to inflation to better capture its relationship with asset prices.
        </p>
        <p className="mb-6">
          The data was then split into training, validation and testing sets, with the training set being used to train the model and the validation and testing sets being used to evaluate the model.
        </p>
        
        <p className='mb-4 text-lg font-semibold'>Signal Logic</p>
        <p className="mb-6">
          The signal logic for this project is rule based, inspired by how long term macro investors think: Are growth and inflation accelerating or decelerating? What regime are we in, and what kind of asset classes historically perform well under those conditions? 
        </p>
        <p className="mb-4 text-lg font-semibold">The signal logic is as follows:</p>
        
        <div className="space-y-4 mb-6">
            <div className="">
              <p className="font-medium text-blue-900 mb-2">
                <span className="text-blue-600">1.</span> If GDP growth is negative and inflation is falling
              </p>
              <p className="px-2 md:px-0">
                <strong>Action:</strong> Buy bonds. A weakening economy with falling inflation reduces pressure on bonds, making them more attractive.
              </p>
            </div>
            
            <div className="">
              <p className="font-medium mb-2">
                <span className="text-blue-600">2.</span> If unemployment rate is dropping and GDP is rising
              </p>
              <p className="px-2 md:px-0">
                <strong>Action:</strong> Buy equities. A strong labor market combined with economic growth typically leads to better earnings and stock returns.
              </p>
            </div>
            
            <div className="">
              <p className="font-medium mb-2">
                <span className="text-blue-600">3.</span> If interest rates are rising
              </p>
              <p className="px-2 md:px-0">
                <strong>Action:</strong> Buy the dollar. Higher interest rates attract global capital to USD-denominated assets, strengthening the dollar.
              </p>
            </div>
          </div>
          <p className="mb-6">
            The final output after all data processing and signal logic is a simple dashboard showing economic regime predictions based on the trends in the data and which asset classes stand to perform better in those regimes.
          </p> 
          <p className="mb-6">
            The goal of this project is not to predict the markets/future perfectly, but to identify when the macro environment is shifting and the corresponding effects on asset prices.          
          </p> 

          <p className="text-xl font-semibold mb-4 text-black">
            Limitations
          </p> 

          <p className="mb-6">
            The project, although ideation is complete, is not perfect yet, as many asset classes and further macro indicators are yet to be included. Backtesting is also yet to be done on the most of the asset classes used.<br/><br/> Macroeconomic data also often gets revised, which means there is always a risk of false signals which might not accurately predict what might be happening in the markets.
          </p>  

          <p className="text-xl font-semibold mb-4 text-black">
            Future Plans
          </p> 

          <p className="mb-6">
            My future plans include building an automated alert and backtesting system that can notify users of sector tilts and asset class predictions. Eventually, I would like to make this project public for general use through a simple API or a more intuitive interface.          
          </p>   
      </div>
    )
  },
];

export const getBlogPostById = (id: string): BlogPostData | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getFeaturedPosts = (): BlogPostData[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByTag = (tag: string): BlogPostData[] => {
  return blogPosts.filter(post => post.tags?.includes(tag));
}; 