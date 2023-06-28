import { styled } from "styled-components"
import { MainPage } from "./Home"
import { useState } from "react";

const MarketPage = styled(MainPage)``

const Market = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);

    const handleMinPriceChange = (event) => {
        setMinPrice(parseInt(event.target.value));
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseInt(event.target.value));
    };

  
    return (
        <MarketPage>
            <div>
                <label htmlFor="min-price">최소 가격:</label>
                <input
                    type="range"
                    id="min-price"
                    min={0}
                    max={1000}
                    value={minPrice}
                    onChange={handleMinPriceChange}
                />
                <span>{minPrice}</span>
                <br />

                <label htmlFor="max-price">최대 가격:</label>
                <input
                    type="range"
                    id="max-price"
                    min={0}
                    max={1000}
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                />
                <span>{maxPrice}</span>
             </div>
        </MarketPage>
    )
}

export default Market;