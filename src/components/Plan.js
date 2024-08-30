import React from "react";
import "../style/Plan.css";
import {plansData} from '../data/plansData';
import whiteTick from '../assets/whiteTick.png';

const Plan = () => {
  return (
    <div className="plan-container" id="plan">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      {/* plan header */}
      <div className="programs-header plan-header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now without</span>
      </div>

      {/* plans */}
      <div className="plans">
        {
            plansData.map((plan, index) => {
                return (
                    <div className="plan" key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>

                        <div className="features">
                            {
                                plan.features.map((feature, index) => {
                                    return (
                                        <div className="feature" key={index}>
                                            <img src={whiteTick} alt="" />
                                            <span>{feature}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <span>{`see more benefits ->`}</span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Plan;
