import React from "react";

const SearchData = () => {

    const searchData = [
        "All", "Wealth", "Computer programming", "Korean dramas",
        "AI", "Podcasts", "Finance", "Beauty", "New to you"
    ]

    const data = searchData.map(data => data)

    return (
        <div>
            {data}
        </div>
    )
}

export default SearchData;