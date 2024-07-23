import GooglePayButton from "@google-pay/button-react"
import React from 'react'
import "./profile.css";
import Navbar from '../Home/Components/Navbar/Navbar';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Footer from "../../Pages/Home/Components/Footer/Footer"
import { changeImg, selectImage } from "../../features/imageSlice";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {

  const navigate = useNavigate();

  const img = useSelector(selectImage);

  const dispatch=useDispatch();

  const logOut = () => {
    signOut(auth);
    console.log("signed Out");
    navigate("/");
  }

  const changeImage = (e) => {
    dispatch(changeImg(URL.createObjectURL(e.target.files[0])));
    e.target.value="";
  }

  return (
    <>
      <Navbar />
      <div className='profile__body'>
        <div className="img__uploader">
          <img className="user__img" src={img} alt="" />
          <input type="file" onChange={(e)=>changeImage(e)} className="img__inp" />
        </div>
        <ul className='main__list'>
          <li className='sub__header'>Basic Subscription</li>
          <li><ul className='sub__list'>
            <li className="plan">Weekly Plan - <span className="rupee"> &#8377;  199 </span> </li>
            <li><GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: '199.00',
                  currencyCode: 'INR',
                  countryCode: 'US',
                },
                shippingAddressRequired: true,
                callbackIntents: ["PAYMENT_AUTHORIZATION"]
              }}
              onPaymentAuthorized={paymentData => {
                console.log('payment authorised', paymentData)
                return { transactionState: "SUCCESS" }
              }}
              onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
              }}
              existingPaymentMethodRequired='false'
              buttonColor="black"
              buttonType="buy"
              buttonRadius={"20"}
            /></li>
          </ul>
          </li>
          <li className='sub__header'>Premium Subscription</li>
          <li>
            <ul className='sub__list'>
              <li className="plan">Monthly Plan - <span className="rupee"> &#8377;  499 </span> </li>
              <li>
                <GooglePayButton
                  environment="TEST"
                  paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                      {
                        type: 'CARD',
                        parameters: {
                          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                          allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                          type: 'PAYMENT_GATEWAY',
                          parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                          },
                        },
                      },
                    ],
                    merchantInfo: {
                      merchantId: '12345678901234567890',
                      merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                      totalPriceStatus: 'FINAL',
                      totalPriceLabel: 'Total',
                      totalPrice: '499.00',
                      currencyCode: 'INR',
                      countryCode: 'US',
                    },
                    shippingAddressRequired: true,
                    callbackIntents: ["PAYMENT_AUTHORIZATION"]
                  }}
                  onPaymentAuthorized={paymentData => {
                    console.log('payment authorised', paymentData)
                    return { transactionState: "SUCCESS" }
                  }}
                  onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                  }}
                  existingPaymentMethodRequired='false'
                  buttonColor="black"
                  buttonType="buy"
                  buttonRadius={"20"}
                /></li>
            </ul>
          </li>
          <li>
            <ul className='sub__list'>
              <li className="plan">Yearly Plan - <span className="rupee"> &#8377;  1999 </span> </li>
              <li><GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: 'CARD',
                      parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                      },
                      tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                          gateway: 'example',
                          gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                  },
                  transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '1999.00',
                    currencyCode: 'INR',
                    countryCode: 'US',
                  },
                  shippingAddressRequired: true,
                  callbackIntents: ["PAYMENT_AUTHORIZATION"]
                }}
                onPaymentAuthorized={paymentData => {
                  console.log('payment authorised', paymentData)
                  return { transactionState: "SUCCESS" }
                }}
                onLoadPaymentData={paymentRequest => {
                  console.log('load payment data', paymentRequest);
                }}
                existingPaymentMethodRequired='false'
                buttonColor="black"
                buttonType="buy"
                buttonRadius={"20"}
              /></li>
            </ul>
          </li>
        </ul>
        <button className='logout__btn' onClick={logOut}>Logout</button>
      </div>
      <Footer />
    </>
  )
}

export default Profile