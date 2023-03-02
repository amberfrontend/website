import React, { useEffect, useState } from "react";
import { siteName } from "../../assets/strings";
import { butterCMS } from "../../utilities/butter-cms";

// const butter = Butter('9dd31e8e8e2a2236688b4d54b14470e27591778d');

export default function Blog() {
    const [butterError, setButterError] = useState(false);
    // const [loaded, setLoaded] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);

    const pageName = "Blog";

    useEffect(() => {
        document.title = `${siteName}${pageName}`;
    }, []);

    useEffect(() => {
        // let filterBy = {};

        const loadData = async () => {
            try {
                // const posts = await Butter.post.list(filterBy)
                // const posts = await butterCMS.post.list(filterBy);
                // setBlogPosts(posts);
            } catch (error) {
                setButterError(true);
                console.log(butterError);
            }
        };

        loadData();
    });

    return <div>{blogPosts}</div>;
}
