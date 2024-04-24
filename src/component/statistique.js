import { Link } from "react-router-dom";
const Statistique = () => {

    return ( 
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Line chart</h4>
                  <canvas id="lineChart"  style={{height:"250px"}}></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Bar chart</h4>
                  <canvas id="barChart"  style={{height:"250px"}}></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Area chart</h4>
                  <canvas id="areaChart"  style={{height:"250px"}}></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Doughnut chart</h4>
                  <canvas id="doughnutChart" style={{height:"250px"}}></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Pie chart</h4>
                  <canvas id="pieChart"  style={{height:"250px"}}></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Scatter chart</h4>
                  <canvas id="scatterChart" style={{height:"250px"}}></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <canvas id="lineChart" style={{height:"250px"}}></canvas>
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <Link to="/23" target="_blank">Bootstrap admin templates</Link> from Bootstrapdash.com</span>
          </div>
        </footer>
       
      </div>
      </div>
     );
}
 
export default Statistique;