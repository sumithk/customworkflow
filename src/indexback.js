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
ReactDOM.render(<SuccessIcon />, document.getElementById("header"));
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
ReactDOM.render(
  <FeedbackOrderExperience
    emptySymbol={
      <img className="star" alt="star" src={require("./star-o.svg")} />
    }
    fullSymbol={<img className="star" alt="star" src={require("./star.svg")} />}
    fractions={2}
  />,
  document.getElementById("rating")
);
//Star Rating handling

//Orderdetails Stub Data
// const orderdetails = {
//   status: "OK",
//   status_code: 200,
//   message: "kugkjujgliugliu",
//   result: {
//     delivery_adddress:
//       "# 5. 1st floor 2nd cross j.j churchRoad near j.j church Ejipura Bangalore - 560047",
//     shipments: {
//       icon: "bike",
//       slot_type: "Standard",
//       total_items_in_shipment: 45,
//       slot_time: "Today within next 90 mins",
//       shipment_value: "1500"
//       // products:[
//       //
//       // ]
//     },
//     order: {
//       payment_status: "successful",
//       order_ammount: 4500,
//       saved_ammout: 200,
//       message: "popup message",
//       voucher: {
//         is_voucher_applied: true,
//         voucher_message: "Voucher Applied"
//       }
//     }
//   }
// };

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
// function Address(props) {
//   return (
//     <div className="pannel-item grid-container2 deliveryinfo">
//       <div className="grid-item title">
//         <i className="ty-icon ty-icon-location" />Delivery Address
//       </div>
//       <div className="grid-item address">{props.address}</div>
//     </div>
//   );
// }
// Address.propTypes = {
//   address: PropTypes.string
// };

// ReactDOM.render(
//   <Address address={props.orderdetails} />,
//   document.getElementById("deliveryinfo")
// );
//Component Address

//Component ShipmentSummary
// function ShipmentSummary(props) {
//   return (
//     <div className="pannel-item grid-container4 shipmentinfo">
//       <div className="grid-item shipment">
//         <i
//           className={
//             "ty-icon " +
//             (props.shipments.icon == "successfull"
//               ? "ty-icon-exp-del"
//               : "ty-icon-std-delivery")
//           }
//         />Shipment 1: {props.shipments.slot_type}
//       </div>
//       <div className="grid-item items">
//         <div>{props.shipments.total_items_in_shipment}</div>
//         <div>Items</div>
//       </div>
//       <div className="grid-item slot">{props.shipments.slot_time}</div>
//       <div className="grid-item price">
//         {" "}
//         Rs {props.shipments.shipment_value}
//       </div>
//     </div>
//   );
// }
// ShipmentSummary.propTypes = {
//   shipments: PropTypes.object,
//   icon: PropTypes.string,
//   slot_type: PropTypes.string,
//   total_items_in_shipment: PropTypes.string,
//   slot_time: PropTypes.string,
//   shipment_value: PropTypes.string
// };
//Component ShipmentSummary

//Component VoucherSummary
// function VoucherSummary(props) {
//   return (
//     <div className="grid-item voucherinfo">
//       <span className="text-primary">{props.voucher.voucher_message}</span>
//       <div>The cashback amount Rs 500 will be credited within 5 days</div>
//     </div>
//   );
// }
// VoucherSummary.propTypes = {
//   voucher: PropTypes.object,
//   voucher_message: PropTypes.string
// };
//Component VoucherSummary

//Component PaymentSummary
// function PaymentSummary(props) {
//   return (
//     <div className="grid-item voucherinfo">
//       <span className="text-primary">{props.voucher.voucher_message}</span>
//       <div>The cashback amount Rs 500 will be credited within 5 days</div>
//     </div>
//   );
// }
// PaymentSummary.propTypes = {
//   voucher: PropTypes.object,
//   voucher_message: PropTypes.string
// };
//Component PaymentSummary

//Component Orderinfo
// function Orderinfo(props) {
//   return (
//     <div className="grid-container2 orderinfo">
//       <VoucherSummary voucher={props.order.voucher} />
//       <div className="grid-item paymentinfo">
//         <table id="t01">
//           <tbody>
//             <tr>
//               <td>Payment Status : </td>
//               <td
//                 className={
//                   "txt-bold text-left " +
//                   (props.order.payment_status == "successfull"
//                     ? "text-light"
//                     : "text-primary")
//                 }
//               >
//                 {props.order.payment_status}
//                 <i
//                   className={
//                     "ty-icon " +
//                     (props.order.payment_status === "successfull"
//                       ? ""
//                       : "ty-icon-info-orange-lined")
//                   }
//                 />
//                 <i
//                   className={
//                     "ty-icon " +
//                     (props.order.payment_status === "failed"
//                       ? ""
//                       : "ty-icon-info-red-lined")
//                   }
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Order Amount :</td>
//               <td className="txt-bold text-left">
//                 Rs {props.order.order_ammount}
//               </td>
//             </tr>
//             <tr>
//               <td>You Saved :</td>
//               <td className="text-primary text-left">
//                 Rs {props.order.saved_ammout}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// Orderinfo.propTypes = {
//   order: PropTypes.object,
//   voucher: PropTypes.object,
//   payment_status: PropTypes.string,
//   order_ammount: PropTypes.string,
//   saved_ammout: PropTypes.string
// };
//Component Orderinfo

//Component OrderSummary
// function OrderSummary(props) {
//   return (
//     <div className="content">
//       <div className="pannel">
//         <ShipmentSummary shipments={props.result.shipments} />
//         <ShipmentSummary shipments={props.result.shipments} />
//         <ShipmentSummary shipments={props.result.shipments} />

//         <Orderinfo
//           order={props.result.order}
//           voucher={orderdetails.result.order}
//         />
//       </div>
//     </div>
//   );
// }
// OrderSummary.propTypes = {
//   result: PropTypes.object,
//   shipments: PropTypes.object,
//   order: PropTypes.object
// };

// ReactDOM.render(
//   <OrderSummary
//     result={orderdetails.result}
//     shipments={orderdetails.result.shipments}
//     order={orderdetails.result.order}
//     voucher={orderdetails.result.order}
//   />,
//   document.getElementById("Address")
// );
//Component OrderSummary

//Assistance section
// function Assistcard() {
//   return (
//     <div className="grid-container3">
//       <div className="grid-item card">
//         <div className="text-blue txt-bold text-medium">
//           <i className="ty-icon ty-icon-voucher" />PAY NOW
//         </div>
//         <p className="text-meduim txt-bold">Pay online for this order</p>
//         <p className="text-light">
//           Complete order payment for cash-free delivery
//         </p>
//       </div>
//       <div className="grid-item card">
//         <div className="text-blue txt-bold text-medium">
//           <i className="ty-icon ty-icon-add-item" />FORGOT ITEM?
//         </div>
//         <p className="text-meduim txt-bold">Pay online for this order</p>
//         <p className="text-light">
//           Complete order payment for cash-free delivery
//         </p>
//       </div>
//       <div className="grid-item card">
//         <div className="text-blue txt-bold">
//           <i className="ty-icon ty-icon-help" />HELP
//         </div>
//         <p className="text-meduim txt-bold">Pay online for this order</p>
//         <p className="text-light">
//           Complete order payment for cash-free delivery
//         </p>
//       </div>
//     </div>
//   );
// }
// ReactDOM.render(<Assistcard />, document.getElementById("assistance"));
//Assistance section

//Assistance section
// function Continuebtn() {
//   return (
//     <Ripples color="green">
//       <button className="btn btn-primary">Continue Shopping</button>
//     </Ripples>
//   );
// }
// ReactDOM.render(<Continuebtn />, document.getElementById("continue"));

//Component OrderPlacedWidget
function OrderPlacedWidget(props) {
  return (
    <div className="content">
      <p>{props.orderdetails.address}</p>
      {/* <SuccessIcon />
      <FeedbackOrderExperience
        emptySymbol={
          <img className="star" alt="star" src={require("./star-o.svg")} />
        }
        fullSymbol={
          <img className="star" alt="star" src={require("./star.svg")} />
        }
        fractions={2}
      />
      <OrderSummary
        address={orderdetails.address}
        shipments={orderdetails.orders}
        order={orderdetails.orders_details}
        voucher={orderdetails.orders_details}
      /> */}
    </div>
  );
}
OrderPlacedWidget.propTypes = {
  orderdetails: PropTypes.object,
  address: PropTypes.string
};
ReactDOM.render(
  <OrderPlacedWidget orderdetails={orderdetails} />,
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
