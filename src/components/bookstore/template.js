import React, { Component } from 'react';
import NebPay from 'nebpay.js';

const nebPay = new NebPay();
let serialNumber;
let enableDebug = true;
class ListHome extends Component {

  onPayClick = () => {
    var to = document.getElementById("to").value;
    var value = document.getElementById("value").value;
    serialNumber = nebPay.pay(to, value, {
        qrcode: {
            showQRCode: true
        },
        goods: {
            name: "test",
            desc: "test goods"
        },
        listener: this.listener,  //set listener for extension transaction result
        debug: enableDebug
    });
    setTimeout(() => {
        this.onrefreshClick();   //search transaction result from server (result upload to server by app)
    }, 1000);
  }

  onNrc20PayClick = () => {
    var to = document.getElementById("nrc20to").value;
    var value = document.getElementById("nrc20value").value;
    serialNumber = nebPay.nrc20pay("NRC", to, value, {
        qrcode: {
            showQRCode: true
        },
        goods: {
            name: "test",
            desc: "test goods"
        },
        nrc20: {
            contractAddress: "",
            name: "demoToken",
            symbol: "NRC",
            decimals: 18
        },
        debug: enableDebug
    });
    setTimeout(() => {
        this.onrefreshClick();
    }, 1000);
  }

  onDeployClick = () => {
    var sourceType = document.getElementById("sourceType").value;
    var source = document.getElementById("source").value;
    var args = document.getElementById("deployArgs").value;
    serialNumber = nebPay.deploy(source, sourceType, args, {
        goods: {
            name: "test",
            desc: "test goods"
        }
    });
    setTimeout(() => {
        this.onrefreshClick();
    }, 1000);
  }

  onCallClick = () => {
    var to = document.getElementById("callTo").value;
    var value = document.getElementById("callValue").value;
    var callFunction = document.getElementById("callFunction").value;
    var callArgs = document.getElementById("callArgs").value;
    serialNumber = nebPay.call(to, value, callFunction, callArgs, {
        qrcode: {
            showQRCode: true
        },
        goods: {
            name: "test",
            desc: "test goods"
        },
        listener: this.listener,  //set listener for extension transaction result
        debug: enableDebug
    });
    setTimeout(() => {
        this.onrefreshClick();
    }, 1000);
  }

  onSimulateCallClick = () => {
    var to = document.getElementById("simulateCallTo").value;
    var value = document.getElementById("simulateCallValue").value;
    var callFunction = document.getElementById("simulateCallFunction").value;
    var callArgs = document.getElementById("simulateCallArgs").value;
    nebPay.simulateCall(to, value, callFunction, callArgs, {
        qrcode: {
            showQRCode: true
        },
        goods: {
            name: "test",
            desc: "test goods"
        },
        //callback:callbackUrl, //don't need to set callback for simulateCall
        listener: this.listener  //set listener for extension transaction result
    });
    document.getElementById('result').value = `app does not support simulateCall !`;
  }

  onrefreshClick = () => {
    nebPay.queryPayInfo(serialNumber,{debug: enableDebug})   //search transaction result from server (result upload to server by app)
    .then(function (resp) {
        document.getElementById('result').value = resp;
    })
    .catch(function (err) {
        console.log(err);
    });
  }

  listener = (resp) => {
    console.log("resp: " + JSON.stringify(resp))
    document.getElementById("resultFromExtension").value = JSON.stringify(resp)
  }

  selectMainnet () {
    enableDebug = false;
  }

  selectTestnet () {
    enableDebug = true;
  }

  render() {
    return (
      <div className="list-home-wrapper">
        <div className="top-content-wrapper">
          <section className="search-wrap">
            <h1>Demo</h1>
            <div>
              <label>Please select MainNet TeseNet to query tx result:</label>
              <br />
              <label><input onclick="selectMainnet();" type="radio" value="mainnetUrl" name="network" />MainNet</label>
              <label><input onclick="selectTestnet();" checked type="radio" value="testnetUrl" name="network" />TestNet</label>
              <p>
                Note: You need to switch the network of wallet
                <a target="_blank" href="https://blog.nebulas.io/2018/05/10/announcement-of-official-app/">App</a>
                or
                <a target="_blank" href="https://github.com/ChengOrangeJu/WebExtensionWallet">extension</a>
                accordingly.
              </p>
            </div>
            <div>
              <div>Normal</div>
              <div style={{display: 'inline-block'}}>
                <div>to:</div>
                <input type="text" id="to" placeholder="to address"/>
              </div>

              <div style={{display: 'inline-block'}}>
                <div>value:</div>
                <input type="text" id="value" placeholder="value"/>
              </div>
              <button type="button" onClick={this.onPayClick}>pay</button>
            </div>
            <div>
              <div>NRC20</div>
              <div style={{display: 'inline-block'}}>
                  <div>currency:</div>
                  <input type="text" id="currency" placeholder="nrc20 currency"/>
              </div>

              <div style={{display: 'inline-block'}}>
                  <div>to:</div>
                  <input type="text" id="nrc20to" placeholder="to address"/>
              </div>

              <div style={{display: 'inline-block'}}>
                  <div>value:</div>
                  <input type="text" id="nrc20value" placeholder="value"/>
              </div>
              <button type="button" onClick={this.onNrc20PayClick}>pay</button>
            </div>
            <div>
              <div>Call</div>

              <div style={{display: 'inline-block'}}>
                  <div>to:</div>
                  <input type="text" id="callTo" placeholder="contract address"/>
              </div>

              <div style={{display: 'inline-block'}}>
                  <div>value:</div>
                  <input type="text" id="callValue" placeholder="value"/>
              </div>
              <div style={{display: 'inline-block'}}>
                  <div>function:</div>
                  <input type="text" id="callFunction" placeholder="function name"/>
              </div>
              <div style={{display: 'inline-block'}}>
                  <div>args:</div>
                  <input type="text" id="callArgs" placeholder="call args"/>
              </div>
              <button type="button" onClick={this.onCallClick}>pay</button>
            </div>
            <div>
              <div>Simulate Call (only supported by extension)</div>

              <div style={{display: 'inline-block'}}>
                  <div>to:</div>
                  <input type="text" id="simulateCallTo" placeholder="contract address"/>
              </div>

              <div style={{display: 'inline-block'}}>
                  <div>value:</div>
                  <input type="text" id="simulateCallValue" placeholder="value"/>
              </div>
              <div style={{display: 'inline-block'}}>
                  <div>function:</div>
                  <input type="text" id="simulateCallFunction" placeholder="function name"/>
              </div>
              <div style={{display: 'inline-block'}}>
                  <div>args:</div>
                  <input type="text" id="simulateCallArgs" placeholder="call args"/>
              </div>
              <button type="button" onClick={this.onSimulateCallClick}>pay</button>
            </div>
            <div>
              <div>
                pay result queried from server with serialNumber,
                you need to click the refresh button th check if the tx result is uploaded to server
              </div>
              <textarea id="result" readonly="readonly"></textarea>
              <button type="button" onClick={this.onrefreshClick}>refresh</button>

              <div>pay result listened directly from extension:</div>
              <textarea id="resultFromExtension" readonly="readonly"></textarea>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ListHome;