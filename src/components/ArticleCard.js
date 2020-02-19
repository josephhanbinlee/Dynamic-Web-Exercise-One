import React from 'react';
// through React, you can pass values through components -- I have data from ArticleListing passing through ArticleCard
// there is no need to import

function ArticleCard( { articleData }) { // you can destructure "props" to reveal the values that you want
console.log("article card article", articleData)
    return ( // for CSS, we use "className" and not "class"
        <article className="articleCard">
            <div className="articleCard_image">
                <img src={articleData.image.url} alt={articleData.image.alt}/>
            </div>
            <div class="articleCard_title">
                <h2>{articleData.title}</h2>
                <p> Date </p>
                <p> {articleData.blurb}</p>
                <a href={`article/${articleData.id}`}> Read More </a>
            </div>
        </article>
    )
}



export default ArticleCard
// be sure to add alt tags in your img