import React from 'react'
import { motion } from "framer-motion"
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { Carousel } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const styless = { height: '500px', color: 'red', lineHeight: '100px', textAlign: 'center' }

const Hero = () => {
  return (
    <section className="relative mx-auto"
    style={{backgroundColor:"transparent"}}
    >
      <div style={{ backgroundColor: "" }} className={`${styles.paddingX} inset-0 max-w-7xl; mx-auto mt-20 flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-10 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div style={{height:"300px"}} className="w-1 violet-gradient" />
        </div>
        {/*图标*/}

        <div className='mt-10'>
          <p className={`${styles.heroHeadText} text-white`} >This is <span className="text-[#915eff]"> Jeff</span></p>
          <p className={`${styles.heroSubText} mt-0 text-white-80`}>
            Learning about the <span className='text-[Violet] font-mono text-[50px] drop-shadow-lg shadow-white'>Magic</span> of Software Engineering
          </p>
        </div>
        {/*文字*/}

      </div>

      <div>

        <Carousel style={{alignItems:"center",backgroundColor:"transparent",display:"flex",
        height:"350px"
        }}>
          <div style={{color:"black"}}>

            {/*
            <Card
              style={{
                width: 500,height:500,marginLeft:"700px"
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
             * */}
          </div>
          <div>
            <h3 style={styless}></h3>
          </div>
          <div>
            <h3 style={styless}></h3>
          </div>
          <div>
            <h3 style={styless}></h3>
          </div>
             
              
        </Carousel>


      </div>



      <br></br>
    </section>

  )
}

export default Hero