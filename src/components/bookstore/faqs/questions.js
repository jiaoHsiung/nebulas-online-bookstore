import React from 'react';
import { Icon } from 'antd';

export default function AboutShop() {
  return (
    <div className="questions-container">
      <div className="wrapper">
        <div class="main-heading-wrap">
          <div className="main-heading">
            <h2>常见问题</h2>
          </div>
        </div>
        <div className="questions-items-wrap">
          <div className="item-wrap">
            <div className="pin-holder">
              <Icon type="pushpin" />
            </div>
            <div className="item-container">
              <div className="item color1">
                <div className="question-item">
                  <span><Icon type="question-circle-o" />Q：</span>
                  <span>图书多久更新一次？</span>
                </div>
                <div className="answer-item">
                  <span><Icon type="check-circle-o" />A：</span>
                  <span>至少每周上新一次。如果你有好书推荐，欢迎给我们留言。</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-wrap">
            <div className="pin-holder">
              <Icon type="pushpin" />
            </div>
            <div className="item-container">
              <div className="item color2">
                <div className="question-item">
                  <span><Icon type="question-circle-o" />Q：</span>
                  <span>如果我选择租书，租书的期限有哪些？</span>
                </div>
                <div className="answer-item">
                  <span><Icon type="check-circle-o" />A：</span>
                  <span>有四种选择：一个月、一个季度、半年、一年；</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-wrap">
            <div className="pin-holder">
              <Icon type="pushpin" />
            </div>
            <div className="item-container">
              <div className="item color3">
                <div className="question-item">
                  <span><Icon type="question-circle-o" />Q：</span>
                  <span>注册会员有什么优惠吗？</span>
                </div>
                <div className="answer-item">
                  <span><Icon type="check-circle-o" />A：</span>
                  <span>注册会员是30元/月，在成为我们的会员期间，你每个月可以享受免费借5本书，而且免邮。同时购买书籍，可打9折。</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-wrap">
            <div className="pin-holder">
              <Icon type="pushpin" />
            </div>
            <div className="item-container">
              <div className="item color4">
                <div className="question-item">
                  <span><Icon type="question-circle-o" />Q：</span>
                  <span>如果我借的图书没有按时归还怎么办？</span>
                </div>
                <div className="answer-item">
                  <span><Icon type="check-circle-o" />A：</span>
                  <span>e.若逾期归还，则需交滞纳金，0.2元/天</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-wrap">
            <div className="pin-holder">
              <Icon type="pushpin" />
            </div>
            <div className="item-container">
              <div className="item color5">
                <div className="question-item">
                  <span><Icon type="question-circle-o" />Q：</span>
                  <span>如果我借的图书没有按时归还怎么办？</span>
                </div>
                <div className="answer-item">
                  <span><Icon type="check-circle-o" />A：</span>
                  <span>若逾期归还，则需交滞纳金，0.2元/天</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-wrap">
            <div className="pin-holder">
              <Icon type="pushpin" />
            </div>
            <div className="item-container">
              <div className="item color6">
                <div className="question-item">
                  <span><Icon type="question-circle-o" />Q：</span>
                  <span>你们回收二手书吗？</span>
                </div>
                <div className="answer-item">
                  <span><Icon type="check-circle-o" />A：</span>
                  <span>Of course! 你们若有意向卖书，请联系我们。</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
