import React from 'react'
import * as Icon from 'react-feather'
function C_info() {

  return (
    <div>

      <h1 className="display-3">All About Covid-19</h1>
      <br />

      <div className="conatiner-fluid">
        <div className="row-fluid">
          <div className="col-sm">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <p className="lead float-left ml-10">What is Coronavirus/COVID-19?</p>
                    <button className="btn btn-link float-right" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <Icon.ChevronDown />
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.
                    This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.
      </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <p className="lead float-left ml-10">Symptoms of COVID-19?</p>
                    <button className="btn btn-link float-right" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <Icon.ChevronDown />
                    </button>
                  </h5>
                </div>

                <div id="collapseTwo" className="collapse collapsed" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.
      </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <p className="lead float-left ml-10">What can I do to protect myself?</p>
                    <button className="btn btn-link float-right" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <Icon.ChevronDown />
                    </button>
                  </h5>
                </div>

                <div id="collapseThree" className="collapse collapsed" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:
      <br />
                    <ul className="float-middle">
                      <li>
                        Clean your hands with an alcohol-based hand rub or wash them with soap and water regularly.
          </li>
                      <li>
                        Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
          </li>
                      <li>
                        Avoid touching eyes, nose and mouth.
          </li>
                      <li>
                        Make sure you, and the people around you, follow good respiratory hygiene
          </li>
                      <li>
                        Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.
          </li>

                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <p className="lead float-left ml-10">Is COVID-19 Airborne?</p>
                    <button className="btn btn-link float-right" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <Icon.ChevronDown />
                    </button>
                  </h5>
                </div>

                <div id="collapseFour" className="collapse collapsed" aria-labelledby="headingFour" data-parent="#accordion">
                  <div className="card-body">
                    The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces.

                    You can be infected by breathing in the virus if you are within 1 metre of a person who has COVID-19, or by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands.
      </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingFive">
                  <h5 className="mb-0">
                    <p className="lead float-left ml-10">Is it safe to receive packages?</p>
                    <button className="btn btn-link float-right" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      <Icon.ChevronDown />
                    </button>
                  </h5>
                </div>

                <div id="collapseFive" className="collapse collapsed" aria-labelledby="headingFive" data-parent="#accordion">
                  <div className="card-body">
                    Yes. The likelihood of an infected person contaminating commercial goods is low and the risk of catching the virus that causes COVID-19 from a package that has been moved, travelled, and exposed to different conditions and temperature is also low.
      </div>
                </div>
              </div>
              <br />
              <br />
              <div className="youtube-guide">

                <div className="card">
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/mOV1aBVYKGA" frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <div className="card-body">
                    <h5 className="card-title">Source of information</h5>
                    <p className="card-text">

                    </p>
                    <a href="https://www.who.int/" target="_blank" className="">
                      <img className="" src="https://logos-download.com/wp-content/uploads/2016/12/World_Health_Organization_logo_logotype.png" alt="Who logo" style={{ width: "80px", height: "25px" }} />
                      <Icon.ArrowUpRight /></a>
                  </div>
                </div>

              </div>


            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default C_info