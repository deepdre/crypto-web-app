import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumber } from "./convertNumbers";

function List({ coin }) {
  return (
    <tr className="list-row">
      <Tooltip title={"coin-logo"} placement="bottom-start">
        <td className="td-image">
          <img src={coin.image} className="coin-logo td-logo" />
        </td>
      </Tooltip>
      <Tooltip title={"Coin Name"}>
        <td>
          <div className="name-col">
            <p className="coin-symbol td-coin-names">{coin.symbol}</p>
            <p className="coin-name td-coin-names">{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title={"24hr Change"} placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex ">
            <div className="price-chip td-price-change">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="chip-flex">
            <div className="price-chip chip-red td-price-change">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip icon-red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
      </Tooltip>
      <Tooltip title={"Current Price"}>
        <td className="info-container">
          <h3
            className="coin-price td-center-align td-current"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title={"Total Volume"}>
        <td>
          <p className="total-volume td-right-align td-total-volume">
            {coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title={"Market Cap"}>
        <td className="desktop-td-mkt">
          <p className="total-volume td-right-align">
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title={"Market Cap"}>
        <td className="mobile-td-mkt">
          <p className="total-volume td-right-align">
            ${convertNumber(coin.market_cap)}
          </p>
        </td>
      </Tooltip>
    </tr>
  );
}
export default List;
