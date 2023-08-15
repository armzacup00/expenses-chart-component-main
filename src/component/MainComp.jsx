function MainComp() {
  return (
    <div className="mainComp rounded-3 p-3">
      <div>
        <h3 className="dark-brown">Spending - Last 7 days</h3>
        <div className="chart align-items-end d-flex justify-content-between text-center">
            <div className="bar1">
                <p className="dollar-text">$17.45</p>
                <div className="bar-1 rounded-1"></div>
                <p className="medium-brown">mon</p>
            </div>
            <div className="bar2">
                <p className="dollar-text">$34.91</p>
                <div className="bar-2 rounded-1"></div>
                <p className="medium-brown">tue</p>
            </div>
            <div className="bar3">
                <p className="dollar-text">$52.36</p>
                <div className="bar-3 rounded-1"></div>
                <p className="medium-brown">wed</p>
            </div>
            <div className="bar4">
                <p className="dollar-text">$31.07</p>
                <div className="bar-4 rounded-1"></div>
                <p className="medium-brown">thu</p>
            </div>
            <div className="bar5">
                <p className="dollar-text">$23.39</p>
                <div className="bar-5 rounded-1"></div>
                <p className="medium-brown">fri</p>
            </div>
            <div className="bar6">
                <p className="dollar-text">$43.28</p>
                <div className="bar-6 rounded-1"></div>
                <p className="medium-brown">sat</p>
            </div>
            <div className="bar7">
                <p className="dollar-text">$25.48</p>
                <div className="bar-7 rounded-1"></div>
                <p className="medium-brown">sun</p>
            </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
            <div>
                <small className="medium-brown">Total this month</small>
                <h2 className="dark-brown">$478.33</h2>
            </div>
            <div className="mt-2">
                <p className="text-end m-0 dark-brown fw-bold">+2.4%</p>
                <small className="medium-brown">from last month</small>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainComp;
