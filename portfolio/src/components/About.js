import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function About() {
  let {profile = 'default'} = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/${profile}`).then(res => res.json()).then(
        result => {
            setData(result.experience)
            // console.log(result)
        }
    ).catch(console.log);
  }, []);

  var addToTimeline = data.map((item, index) => {
    return (
      index == 0 ?
      <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2a7b77', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  #2a7b77' }}
            date={item.year}
            iconStyle={{ background: '#696969', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"><b>{item.role}</b></h3>
            <h4 className="vertical-timeline-element-subtitle"><b>{item.name}</b></h4>
            <p>
              {item.description}
            </p>
      </VerticalTimelineElement>
      :
      <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: '#2a7b77', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #2a7b77' }}
            date={item.year}
            iconStyle={{ background: '#696969', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"><b>{item.role}</b></h3>
            <h4 className="vertical-timeline-element-subtitle"><b>{item.name}</b></h4>
            <p>
              {item.description}
            </p>
      </VerticalTimelineElement>
    );
  });

  return (
    <div style={{backgroundColor: '#d7d7d7', position:'sticky', zIndex: '-10'}}>
        <VerticalTimeline>
          {addToTimeline}
        </VerticalTimeline>
        
    </div>
  );
}

export default About;