require("./style.css");
require("./fonts.css");
require("./icon.css");
require("svg-inline-loader?classPrefix!./ty.svg");

import React from "react";
import ReactDOM from "react-dom";
import Ripples from "react-ripples";
import PropTypes from "prop-types";
var Rating = require("react-rating");

//Render Header
function Header() {
  return (
    <div className="header">
      <div>
        <i className="ty-icon ty-icon-bigbasket" />
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-quality" />Quality
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-ontime" />On time guarantee
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-free-delivery" />Free delivery
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-return" />Return policy
      </div>
    </div>
  );
}
ReactDOM.render(<Header />, document.getElementById("header"));
//Render Header

//SuccessIcon Animated ---------------------------------------------------------
function SuccessIcon() {
  return (
    <div className="Thankyou">
      <div className="success-icon">
        <svg
          id="successAnimation"
          className="animated"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
        >
          <path
            id="successAnimationResult"
            fill="#D8D8D8"
            d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
          />
          <circle
            id="successAnimationCircle"
            cx="35"
            cy="35"
            r="24"
            stroke="#979797"
            strokeWidth="2"
            strokeLinecap="round"
            fill="transparent"
          />
          <polyline
            id="successAnimationCheck"
            stroke="#979797"
            strokeWidth="2"
            points="23 34 34 43 47 27"
            fill="transparent"
          />
        </svg>
        <p className="text-primary txt-bold fadeIn">
          Yaay.. Your order is placed!
        </p>
      </div>
    </div>
  );
}
//SuccessIcon Animated-------------------------------------------------------------

//FeedbackForm for Rating
class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Tell us what went wrong."
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Feedback: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit}>
        <textarea
          className="form-control"
          placeholder={this.state.value}
          onChange={this.handleChange}
        />
        <div className="clearfix">
          <Ripples className="btn-ripple fl-rt" color="#666">
            <button type="submit" className="btn btn-secondary">
              SUBMIT
            </button>
          </Ripples>
          <Ripples className="btn-ripple fl-rt" color="#dfdfdf">
            <button type="button" className="btn btn-default">
              NOT NOW
            </button>
          </Ripples>
        </div>
      </form>
    );
  }
}
//FeedbackForm for Rating

//Component Refer&Earn
function Referandearn() {
  return (
    <div className="clearfix">
      <Ripples color="green">
        <button className="btn btn-default">Refer & earn</button>
      </Ripples>
    </div>
  );
}
//Component Refer&Earn

//Star Rating handling
class FeedbackOrderExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showfeed: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if (event <= 3) {
      alert("You have rated less than" + event + "Show feedback");
      this.setState({ showfeed: true });
    } else if (event === 5) {
      alert("You have given" + event + "Star, Show Refer&Earn ");
      this.setState({ showfeed: false });
    }
  }
  render() {
    const showfeed = this.state.showfeed;
    const showdiv = showfeed ? <FeedbackForm /> : <Referandearn />;
    return (
      <div className="clearfix">
        <span className="rating-txt">How was everything?</span>
        <Rating
          {...this.props}
          onChange={this.handleClick}
          initialRating={this.state.value}
        />

        {showdiv}
      </div>
    );
  }
}
//Star Rating handling

var orderdetails = {
  address:
    "No:33,Flat No:006,Arrcons Agna IndraprastaShamanna Lane,Church roadMurugeshpalya Bangalore-560017",
  orders: [
    {
      order_id: "33666609",
      express_shipment_icon: "van.png",
      voucher: "",
      slot_time: "16 Mar, Friday 07:00 AM - 09:30 AM",
      order_value: "48.00",
      is_express: false,
      order_type: "Normal",
      item_count: 1,
      payment_method: "Cash On Delivery",
      order_status: "Order Placed",
      view_invoice: "/order/A-BBO-33666609-150318/invoice/",
      order_number: "A-BBO-33666609-150318"
    }
  ],
  orders_details: {
    is_voucher_applied: false,
    payment_status: "Pay on delivery",
    payment_status_msg: {
      msg: "",
      msg_formatted_values: []
    },
    shop_more: true,
    order_amount: "48.00",
    total_savings: "0.00",
    voucher_msg: ""
  }
};
//Orderdetails Stub Data

//Component Address
function Address(props) {
  return (
    <div className="pannel-item grid-container2 deliveryinfo">
      <div className="grid-item title">
        <i className="ty-icon ty-icon-location" />Delivery Address
      </div>
      <div className="grid-item address">{props.address}</div>
    </div>
  );
}
Address.propTypes = {
  orderdetails: PropTypes.object,
  address: PropTypes.string
};
//Component Address

//Component ShipmentSummary
function ShipmentSummary(props) {
  return (
    <div className="pannel-item grid-container4 shipmentinfo">
      <div className="grid-item shipment">
        <i
          className={
            "ty-icon " +
            (props.orders.is_express == true
              ? "ty-icon-exp-del"
              : "ty-icon-std-delivery")
          }
        />Shipment 1: {props.orders.order_type}
      </div>
      <div className="grid-item items">
        <div>{props.orders.item_count}</div>
        <div>Items</div>
      </div>
      <div className="grid-item slot">{props.orders.slot_time}</div>
      <div className="grid-item price"> Rs {props.orders.order_value}</div>
    </div>
  );
}
ShipmentSummary.propTypes = {
  orders: PropTypes.array,
  is_express: PropTypes.bool,
  order_type: PropTypes.string,
  item_count: PropTypes.string,
  slot_time: PropTypes.string,
  order_value: PropTypes.string
};
//Component ShipmentSummary

//Component OrderPlacedWidget
function OrderPlacedWidget(props) {
  return (
    <div className="content">
      <SuccessIcon />
      <FeedbackOrderExperience
        emptySymbol={
          <img className="star" alt="star" src={require("./star-o.svg")} />
        }
        fullSymbol={
          <img className="star" alt="star" src={require("./star.svg")} />
        }
        fractions={2}
      />
      <div className="pannel">
        <Address address={props.address} />
        <ShipmentSummary orders={props.orders} />
      </div>
    </div>
  );
}
OrderPlacedWidget.propTypes = {
  orderdetails: PropTypes.object,
  address: PropTypes.string,
  orders: PropTypes.array
};
ReactDOM.render(
  <OrderPlacedWidget
    address={orderdetails.address}
    orders={orderdetails.orders}
  />,
  document.getElementById("root")
);
//Component OrderPlacedWidget

//Render Footer
// function Footer() {
//   return (
//     <div className="footer">
//       <p className="text-center">
//         For Futher enquiries: Call: 1860123100 | E-mail:
//         customerservice@bigbasket.com
//       </p>
//     </div>
//   );
// }
// ReactDOM.render(<Footer />, document.getElementById("footer"));
//Render Footer
