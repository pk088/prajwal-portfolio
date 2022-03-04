import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';


const SkillBar = (props) => {

    // const percentage = 90;

    const finalSkillData = props.SkillData;


  return (
    <div>
        <div className='circular_bar'>
                  <CircularProgressbarWithChildren
                    value={finalSkillData.percentage}
                    styles={buildStyles({
                      textColor: finalSkillData.styles.textColor,
                      pathColor: finalSkillData.styles.pathColor,
                      trailColor: "rgb(200,200,200)"
                    })}>
                    <img src={finalSkillData.imgsrc} alt="dog" style={{width:"100px", height:"100px"}} />
                  </CircularProgressbarWithChildren>
                    <h4 className=' text-center mt-4 '>{finalSkillData.alt}</h4>
                </div>

    </div>
  )
}

export default SkillBar