import { styled } from "styled-components";

const GoodsCard = styled.figure`
    background: #fff;
    display: flex;
    flex-direction:row;
    border-radius:20px;
    overflow:hidden;
    width: 440px;
    height: 280px;

    img {
        object-fit: cover;
    }
`

const GoodsCap = styled.figcaption`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  gap: 15px;

  .CardTitle {
    font-weight: 600;
  }

    .SaleStatus {
        color: #E2215B;
        border-radius: 8px;
        border: 1px solid #E2215B;
        width: 80px;
        padding: 4px 0px;
        text-align: center;
    }
`

const MarketItem = ({ item }) => {
  return (
    <GoodsCard>
      <img src={item.picture} alt={item.title} style={{ width: "200px" }} />
      <GoodsCap>
        <div className="CardTitle">{item.title}</div>
        <div className="CartPrice">{item.price}만원</div>
        <div className="CartRegion">{item.region}</div>
        <span className="SaleStatus">
          {item.onsale ? "판매 중" : "판매완료"}
        </span>
      </GoodsCap>
    </GoodsCard>
  );
};

export default MarketItem;
