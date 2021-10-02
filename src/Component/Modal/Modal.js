import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_MODAL } from '../../action/types/ActionType';
import { Bar } from 'react-chartjs-2';




export default function ModalViewDetailCountry(props) {

    const dispatch = useDispatch();
    const { show, detailCountry } = useSelector(state => state.Covid19Reducer);
    const arrConfirmed = detailCountry?.map((item,index)=>{return item.Confirmed});
    const arrConfirmed30days = arrConfirmed.slice(arrConfirmed.length-365);
    const arrConfirmedDay = detailCountry?.map((item,index)=>{return item.Date.slice(0,10)});
    const arrConfirmedDay30days = arrConfirmedDay.slice(arrConfirmedDay.length-365);
    let lableChart = `TOTAL CONFIRMED COVID-19 IN ${detailCountry[0]?.Country.toUpperCase()} IN 365 DAYS`;
    const data = {
        labels: arrConfirmedDay30days,
        datasets: [
            {
                label: lableChart,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: arrConfirmed30days
            }
        ]
    };
    const handleClose = () => {
        dispatch({ type: HIDE_MODAL })
    };


    return (
        <Modal show={show} dialogClassName="" onHide={handleClose} centered>
            <Modal.Body>
                <Bar
                    data={data}
                    width={100}
                    height={500}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </Modal.Body>
            <Modal.Footer>
                <p>( Rest country API does not give free access to get data )</p>
                <Button variant="info" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
