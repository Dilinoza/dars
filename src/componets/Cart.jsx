import React from "react";
import china from "../img/china.jpg";
import jp from "../img/jp.jpg";
import ko from "../img/ko.png";
import rasm1 from "../img/rasm1.jpg";
import rasm2 from "../img/rasm2.jpg";
import rasm3 from "../img/rasm3.jpg";

export default function Cart() {
        let cars_type = [
          {
            id: 1,
            country: "talyota Aque",
            car_img: rasm1,
            count: 1290000,
            
          },
          {
            id: 2,
            country: "Tayota passo",
            car_img: rasm2,
            count:1040000,
          },
          {
            id: 3,
            country: "Nisan Note",
            car_img: rasm3,
            count:1120000,
          },
        ];
    return (
        <div className="cart">
            <div className="container">
                <div className="text_style">
                    <h1>Популярные авто для ввоза</h1>
                    <p>
                        Исследуйте топ-выбор наших клиентов: доступные, надежные и стильные авто, идеально соответствующие вашим желаниям и потребностям.
                    </p>
                    <div >
                        <button className="xэтчбэки_btn">
                            <i class="fa-solid fa-taxi"></i>
                            Хэтчбэки
                        </button>
                        <button className="cеданы_btn">
                            <i class="fa-solid fa-car-side"></i>
                            Cеданы
                        </button>
                        <button className="moshina_btn">

                            Moshina
                        </button>
                        <button className="bus_btn">
                            <i class="fa-solid fa-bus"></i>
                            Минивэны
                        </button>
                        <button className="gazlamoq_btn">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                            Gazlamoq
                        </button>
                        <button className="energetik_btn">
                            <i class="fa-solid fa-bolt"></i>
                            Energetik
                        </button>
                    </div>
                    <div>
                        <button className="china_btn">
                            <figure>
                                <img src={china} alt="china"></img>
                                CN
                            </figure>

                        </button>
                        <button className="jp_btn">
                            <figure>
                                <img src={jp} alt="japan"></img>
                                JP
                            </figure>
                        </button>
                        <button className="korescha_btn">
                            <figure>
                                <img src={ko} alt="koreya"></img> KR
                            </figure>
                        </button>
                        <div className="cards">
          {cars_type.map((item) => (
            <div className="cart" key={item.id}>
              <div className="flex_element">
                <div>
                <figure>
                <img src={item.car_img}  />
              </figure>
                  <h1>из {item.country} </h1>
                  <h1>{item.count} PUB</h1>
                </div>
                <figure>
                  <img src={item.country_rasm} />
              
                </figure>
              <p>dfg</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
</div>
    </div>
  );
};
