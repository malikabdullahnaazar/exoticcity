import React, { useContext } from 'react'
import {
    MDBBtn,
    MDBCol,
    // MDBContainer,
    // MDBIcon,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../UserContext';
import { Link } from 'react-router-dom';

const Confirmation = () => {
    const history = useNavigate();
    const { CartItem,setCartItem } = useContext(UserContext);
    const handleGoBack = () => {
        history(-1);
        setCartItem([])
    };
    const { basicModal, setBasicModal, toggleShow, ordernumber } = useContext(UserContext);
    var userDetails = localStorage.getItem("userDetails");
    if (userDetails !== null) {
        userDetails = JSON.parse(userDetails);
    } else {
        // handle the case where the user is not logged in
    }
    function calculateSubtotal(cartItems) {
        let subtotal = 0;
        cartItems && cartItems.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        return subtotal;
    }
    const subtotal = calculateSubtotal(CartItem);

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#35558a" }}>

                <MDBRow className="justify-content-center align-items-center h-50 text-center">
                    <MDBCol>
                        {/* <MDBBtn color="light" size="lg" onClick={toggleShow}>
                <MDBIcon fas icon="info me-2" /> Get information
              </MDBBtn> */}
                        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                            <MDBModalDialog>
                                <MDBModalContent>
                                    <MDBModalHeader className="border-bottom-0">


                                        <MDBBtn
                                            className="btn-close"
                                            color="none"
                                            onClick={() => { toggleShow(); handleGoBack(); }}
                                        ></MDBBtn>

                                    </MDBModalHeader>
                                    <MDBModalBody className="text-start text-black p-4">
                                        <MDBTypography
                                            tag="h5"
                                            className="modal-title text-uppercase mb-5"
                                            id="exampleModalLabel"
                                        >
                                            {userDetails.FirstName}
                                        </MDBTypography>
                                        <MDBTypography
                                            tag="h4"
                                            className="mb-5"
                                            style={{ color: "#35558a" }}
                                        >
                                            Thanks for your order
                                        </MDBTypography>
                                        <p className="mb-0" style={{ color: "#35558a" }}>
                                            Payment summary
                                        </p>
                                        <hr
                                            className="mt-2 mb-4"
                                            style={{
                                                height: "0",
                                                backgroundColor: "transparent",
                                                opacity: ".75",
                                                borderTop: "2px dashed #9e9e9e",
                                            }}
                                        />

                                        {CartItem ? CartItem.map((i) => {
                                            return <>
                                                <div className="d-flex justify-content-between">
                                                    <p className="fw-bold mb-0">{i.Description ? i.Description.slice(0, 30) : '0'}(Qty:{i.quantity})</p>
                                                    <p className="text-muted mb-0">${i.price ? (i.price * i.quantity).toFixed(3) : '0'}</p>

                                                </div>
                                            </>
                                        }) : ''}


                                        <div className="d-flex justify-content-between">
                                            <p className="small mb-0">Shipping</p>
                                            <p className="small mb-0">$0</p>
                                        </div>

                                        <div className="d-flex justify-content-between pb-1">
                                            <p className="small">Tax</p>
                                            <p className="small">$0</p>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="fw-bold">Total</p>
                                            <p className="fw-bold" style={{ color: "#35558a" }}>
                                                ${subtotal ? subtotal.toFixed(3) : 0}
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="fw-bold">Order No</p>
                                            <p className="fw-bold" style={{ color: "#35558a" }}>
                                                {ordernumber ? ordernumber : 0}
                                            </p>
                                        </div>
                                    </MDBModalBody>

                                    <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                                        <Link to="/shop"onClick={()=>{toggleShow(); setCartItem([]);}}>

                                            <MDBBtn
                                                size="lg"
                                                style={{ backgroundColor: "#35558a" }}
                                                className="mb-1"
                                            >
                                                Go to Shop
                                            </MDBBtn>
                                        </Link>
                                    </MDBModalFooter>
                                </MDBModalContent>
                            </MDBModalDialog>
                        </MDBModal>
                    </MDBCol>
                </MDBRow>
            </section>
        </>
    )
}

export default Confirmation