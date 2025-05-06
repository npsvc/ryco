import React from 'react';
import './Report.css';
import { Link } from 'react-router-dom';

const Report = () => {
  return (
    <div className="report-wrapper">
      <h1 className="report-title">Report</h1>

      <section className="report-section">
        <h2 className="report-heading">First Day of Arrival</h2>
        <p className="report-paragraph">
          We met up with our Albanian friends and they showed us the town Fier and they took us to their favourite hangout places.
        </p>
        <hr className="divider" />
      </section>

      <section className="report-section">
        <h2 className="report-heading">Second Day</h2>
        <p className="report-paragraph">
          We visited school “Petro Sota” where their principal gave a short welcoming speech, later on they took us on a town tour where we saw their university which unfortunately doesn't work, but now it serves as a place where you can take pretty good pictures. After that they showed us local monuments which had deep history behind them. After monuments we visited their church where the priest gave a short speech about history of that church and their mosque which has beautiful interior. Then we had lunch where we had a chance to hang out with our Albanian friends and after lunch we had a bunch of fun activities at their school.
        </p>
        <hr className="divider" />
      </section>

      <section className="report-section">
        <h2 className="report-heading">Third Day</h2>
        <p className="report-paragraph">
          We began our day at their school, where we had a school tour and were impressed by their amazing working conditions, especially for practical teaching. Later on, we visited their cultural center where we learned about their history of traditional dances, and even had a chance to actually learn some of them. After that, we took a bus to Apollonia, an Ancient Greek trade colony, where we had lunch and explored the ancient ruins. We finished the day with a simple hangout with our Albanian friends.
        </p>
        <hr className="divider" />
      </section>

      <section className="report-section">
        <h2 className="report-heading">Fourth Day</h2>
        <p className="report-paragraph">
          On our fourth day, my friends took me to see their local thrift stores and later we headed to school where we heard the agenda of the day. We then visited their local mechanics where some Albanian students are working, and had lunch. The day ended with more hangouts.
        </p>
        <hr className="divider" />
      </section>

      <section className="report-section">
        <h2 className="report-heading">Fifth Day</h2>
        <p className="report-paragraph">
          Early in the morning, we went to try some Albanian byrek. After that, we visited their museum, which was decorated with traditional clothes, paintings, and ancient weapons. Later, we had a fun project at their school acting like plumbers, followed by a pantomime activity. We danced and played music behind the school, then had lunch. After lunch, we visited the beautiful and warm beach “Darezeze,” and after a fun bus ride, we finished our day with another hangout.
        </p>
        <hr className="divider" />
      </section>

      <section className="report-section">
        <h2 className="report-heading">Last Day</h2>
        <p className="report-paragraph">
          We started our day at school with a Kahoot quiz based on our exchange activities, where Franci was the winner. Later, we worked on a small programming project creating a website based on the exchange. We finished early to prepare for the farewell party. The party was awesome—we played music, danced, had a couple of drinks, and finished the party in front of the hotel where we said goodbye.
        </p>
      </section>
      <Link to="/" className="back-button">
          &#8592;
      </Link>
        <div id='creditsss'>
          <p>Made by:</p>
          <p>FrontEnd: Nikolina Pisarević | BackEnd: Jovan Kešeljević</p>
        </div>
    </div>
  );
}

export default Report;
