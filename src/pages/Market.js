import { styled } from "styled-components"
import { MainPage } from "./Home"
import { useState, useEffect } from "react";
import { Announcement, HotDiv, MainNotice } from "./Notice";
import MarketItem from "../components/MarketItem";

const MarketPage = styled(MainPage)``

const Market = () => {
    const [marketItems, setMareketItems] = useState([])
    const [filteredMarketItems, setFilteredMarketItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/market")
        .then(res=>res.json())
        .then(data=>{
            setMareketItems(data.marketItems)
            setFilteredMarketItems(data.marketItems)
        }
            )
    },[])
  
    return (
        <MarketPage>
            <MainNotice>
                <HotDiv>HOT</HotDiv>
                <Announcement>[필독] 뮬 장터규정 업데이트 안내</Announcement>
            </MainNotice>
            <section>
                {filteredMarketItems.map((item)=> {
                    return <MarketItem key={item.id} item={item} />
                })}
            </section>
        </MarketPage>
    )
}

export default Market;