import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFollowCountry, delFollowCountry, getApiDataAction, getDetailCountry } from '../../action/CovidAction';
import { SORT_BY_NEWCONFIRMEDS, SORT_BY_NEWCONFIRMEDS_FOLLOW, SORT_BY_TOTALCONFIRMEDS, SORT_BY_TOTALCONFIRMEDS_FOLLOW, SORT_BY_TOTALDEATHS, SORT_BY_TOTALDEATHS_FOLLOW, SORT_BY_TOTALRECOVEREDS, SORT_BY_TOTALRECOVEREDS_FOLLOW } from '../../action/types/ActionType';
import Footer from '../../Component/Footer/Footer';
import ModalViewDetailCountry from '../../Component/Modal/Modal';
import './Home.css';

export default function ManageDataCovid19(props) {

  const { arrCountry, global, followCountry } = useSelector(state => state.Covid19Reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getApiDataAction();
    dispatch(action);
  }, [])

  // Handle Convert Date to String
  let d = new Date(global.Date);
  let dateString = d.toString()

  // Event
  let Follow = 'Follow';
  let Delete = 'Delete';

  // Handle Click Open Popup
  const handleClickView = (key) => {
    dispatch(getDetailCountry(key));

  }
  // Handle Click Follow Country
  const handleClickFollow = (country) => {
    dispatch(addFollowCountry(country));
  }
  // Handle Click Delete Follow Country
  const handleClickDelete = (country) => {
    dispatch(delFollowCountry(country));
  }

  // Render Table Details 
  const renderTableCovid19 = (array, event, handleEvent) => {
    return array?.map((country, index) => {
      return <tr className="text-center" key={index}>
        <td> {index + 1} </td>
        <td title="Click View Detail" className="click-country" onClick={() => { handleClickView(country.Country) }}> {country.Country} </td>
        <td className="text-danger"> + {new Intl.NumberFormat().format(country.NewConfirmed)} </td>
        <td> {new Intl.NumberFormat().format(country.TotalConfirmed)} </td>
        <td> {new Intl.NumberFormat().format(country.TotalDeaths)} </td>
        <td className="text-success"> {new Intl.NumberFormat().format(country.TotalRecovered)} </td>
        <td>
          <button className="click-country btn btn-success mr-2" onClick={() => { handleClickView(country.Country) }}>View</button>
          <button className="click-country btn btn-success" onClick={() => { handleEvent(country) }}>{event}</button>
        </td>
      </tr>
    })
  }


  return (
    <div className="covid19-project">
      <div className="container pb-5">
        <div className="covid-global">
          <h1>COVID-19 FIGURES IN THE WORLD</h1>
          <h6>Data at time : {dateString}</h6>
          <div className="row mt-5">
            <div className="col-1"></div>
            <div className="col-2">
              <img className="covid-img" src="/img/confirm.png" alt="covid19"></img>
              <h6>New Confirmeds</h6>
              <h5 className="text-danger">+ {new Intl.NumberFormat().format(global.NewConfirmed)}</h5>
            </div>
            <div className="col-2">
              <img className="covid-img" src="/img/global-confirm-2.png" alt="covid19"></img>
              <h6>Total Confirmeds</h6>
              <h5>{new Intl.NumberFormat().format(global.TotalConfirmed)}</h5>
            </div>
            <div className="col-2">
              <img className="covid-img" src="/img/dead.png" alt="covid19"></img>
              <h6>New Deaths*</h6>
              <h5 className="text-danger">+ {new Intl.NumberFormat().format(global.NewDeaths)}</h5>
            </div>
            <div className="col-2">
              <img className="covid-img" src="/img/total-dead.png" alt="covid19"></img>
              <h6>Total Deaths*</h6>
              <h5>{new Intl.NumberFormat().format(global.TotalDeaths)}</h5>
            </div>
            <div className="col-2">
              <img className="covid-img" src="/img/recover.png" alt="covid19"></img>
              <h6>Total Recovereds</h6>
              <h5 className="text-success">{new Intl.NumberFormat().format(global.TotalRecovered)}</h5>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        <div className="covid-detail">
          <table className="table">
            <thead className="head-table">
              <tr className="row-title">
                <th> No </th>
                <th> Country </th>
                <th title="Click Sort" className="colum-sort" onClick={() => {
                  dispatch({ type: SORT_BY_NEWCONFIRMEDS });
                }}>
                  New Confirmeds
                  <i className="icon-sort fa fa-caret-down"></i>
                </th>
                <th title="Click Sort" className="colum-sort" onClick={() => {
                  dispatch({ type: SORT_BY_TOTALCONFIRMEDS });
                }}> Total Confirmeds
                  <i className="icon-sort fa fa-caret-down"></i>
                </th>
                <th title="Click Sort" className="colum-sort" onClick={() => {
                  dispatch({ type: SORT_BY_TOTALDEATHS });
                }}> Total Deaths*
                  <i className="icon-sort fa fa-caret-down"></i>
                </th>
                <th title="Click Sort" className="colum-sort" onClick={() => {
                  dispatch({ type: SORT_BY_TOTALRECOVEREDS });
                }}> Total Recovereds
                  <i className="icon-sort fa fa-caret-down"></i>
                </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {renderTableCovid19(arrCountry, Follow, handleClickFollow)}
            </tbody>
          </table>
        </div>
        {/* FOLLOW COUNTRY TABLE */}
        <div className="follow-country">
          <h3 className="mb-4">THE LIST OF FOLLOWING COUNTRIES</h3>
          <div className="covid-detail-follow">
            <table className="table">
              <thead className="head-table">
                <tr className="row-title">
                  <th> No </th>
                  <th> Country </th>
                  <th title="Click Sort" className="colum-sort" onClick={() => {
                    dispatch({ type: SORT_BY_NEWCONFIRMEDS_FOLLOW });
                  }}>
                    New Confirmeds
                    <i className="icon-sort fa fa-caret-down"></i>
                  </th>
                  <th title="Click Sort" className="colum-sort" onClick={() => {
                    dispatch({ type: SORT_BY_TOTALCONFIRMEDS_FOLLOW });
                  }}> Total Confirmeds
                    <i className="icon-sort fa fa-caret-down"></i>
                  </th>
                  <th title="Click Sort" className="colum-sort" onClick={() => {
                    dispatch({ type: SORT_BY_TOTALDEATHS_FOLLOW });
                  }}> Total Deaths*
                    <i className="icon-sort fa fa-caret-down"></i>
                  </th>
                  <th title="Click Sort" className="colum-sort" onClick={() => {
                    dispatch({ type: SORT_BY_TOTALRECOVEREDS_FOLLOW });
                  }}> Total Recovereds
                    <i className="icon-sort fa fa-caret-down"></i>
                  </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {renderTableCovid19(followCountry, Delete, handleClickDelete)}
              </tbody>
            </table>
          </div>
        </div>
        {/* CHART MODAL */}
        <ModalViewDetailCountry />
      </div>
      <Footer />
    </div>
  )
}
