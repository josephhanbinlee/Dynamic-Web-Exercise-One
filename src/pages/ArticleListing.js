import React from 'react';

import ArticleCard from '../components/ArticleCard';
import Data from "../components/Data";

function ArticleListing() { // don't put divs within divs -- not instructive at all
    console.log('data', Data);
    return (
        <div>
            <header>
                <h1> Articles </h1>
            </header>
            <main>
            {Data.map((articleItem,i) => ( // every single item in "Data", we're calling "article" // => -- auto-returning
                <ArticleCard key={i} articleData={articleItem} /> // single object being added to array
            ))}
            </main>
        </div>

    );
}

export default ArticleListing