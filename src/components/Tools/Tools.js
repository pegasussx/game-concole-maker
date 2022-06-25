import React from "react";
import styled from "styled-components";
import ImageUploading from 'react-images-uploading';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Design } from "../../assets/images/main_assets/1-DESIGN/DesignImage";
import { Abxy } from "../../assets/images/main_assets/2-ABXY/AbxyImage";
import { Dpad } from "../../assets/images/main_assets/3-Dpad/DpadImage";
import { ThumbL } from "../../assets/images/main_assets/4-THUMBSTICK L/ThumbL";
import { ThumbR } from "../../assets/images/main_assets/5-THUMBSTICK R/ThumbR";
import { StartBtn } from "../../assets/images/main_assets/6-START BACK/StartBtn";
import { Touchpad } from "../../assets/images/main_assets/7-TOUCHPAD/Touchpad";
import { Trim } from "../../assets/images/main_assets/8-TRIM/Trims";
import { Trigger } from "../../assets/images/main_assets/9-TRIGGERS/Triggers";
import { RearDesign } from "../../assets/images/main_assets/10-REAR DESIGN/RearDesign";
import { Paddle } from "../../assets/images/main_assets/paddle/Paddle";


import { DominL } from "../../assets/images/main_assets/L Domin8or Button/DominL";
import { DominR } from "../../assets/images/main_assets/R Domin8or Button/DominR";
import { DominSelection } from "../../assets/images/main_assets/L Domin8or Button/DominL";

import AppContext from "../../context/context";
import "swiper/css";

const Tools = () => {

  const [DesigntabSelect, DesignSetTabSelect] = React.useState(0);
  const [AbxytabSelect, AbxySetTabSelect] = React.useState(0);
  const [DpadtabSelect, DpadSetTabSelect] = React.useState(0);
  const [ThumbLtabSelect, ThumbLSetTabSelect] = React.useState(0);
  const [ThumbRtabSelect, ThumbRSetTabSelect] = React.useState(0);
  const [StartBtntabSelect, StartBtnSetTabSelect] = React.useState(0);
  const [TouchpadtabSelect, TouchpadSetTabSelect] = React.useState(0);
  const [TrimtabSelect, TrimSetTabSelect] = React.useState(0);
  const [TriggertabSelect, TriggerSetTabSelect] = React.useState(0);
  const [RearDesigntabSelect, RearDesignSetTabSelect] = React.useState(0);
  const myContext = React.useContext(AppContext);
  const [snapIndex, setSnapIndex] = React.useState(0);

  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    myContext.setImages(imageList);
  };

  return (
    <Wrapper>
      <TopDiv>
        <div>
          <div> 
            <img></img>
            {myContext.spanNames[snapIndex].name}
          </div>
          <SwiperProcessor>
            <div>
              <progress id = "file" max = {myContext.spanNames.length} value = {snapIndex+1}></progress>
              Step {snapIndex + 1} / {myContext.spanNames.length}
            </div>
            <span className="prev">
              <img></img>
            </span>
            <span className="next">
              <img></img>
            </span>
          </SwiperProcessor>
        </div>
      </TopDiv>
      <MediumDiv>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation = {{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          scrollbar={{ draggable: true }}
          onSlideChange={(event) => {
            setSnapIndex(event.snapIndex);
          }}
          onSwiper={(swiper) => console.log('--')}
        >
          {/* 
             ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
             ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
             ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
             ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
             ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
             ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
          */}
            <SwiperSlide>
              <TopItems>
                {
                  Design.steps.map((item, index) => (
                    <TapItem w={Design.steps.length} key={ index } keys={index} active={DesigntabSelect} onClick = {() => DesignSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Design.items[DesigntabSelect].map((item, index) => (
                    <SelectItem bgImg={item.selet} onClick={() => myContext.setDesign([DesigntabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>
          {/*
              █████╗ ██████╗ ██╗  ██╗██╗   ██╗
              ██╔══██╗██╔══██╗╚██╗██╔╝╚██╗ ██╔╝
              ███████║██████╔╝ ╚███╔╝  ╚████╔╝ 
              ██╔══██║██╔══██╗ ██╔██╗   ╚██╔╝  
              ██║  ██║██████╔╝██╔╝ ██╗   ██║   
              ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   
          */}
          <SwiperSlide>
            <TopItems>
              {
                Abxy.steps.map((item, index) => (
                  <TapItem w={Abxy.steps.length} key={ index } keys={index} active={AbxytabSelect} onClick = {() => AbxySetTabSelect(index)}>
                    <span>
                      {item.name}
                    </span>
                    <span>
                      {item.price}
                    </span>
                    <div></div>
                  </TapItem>
                ))
              }
            </TopItems>
            <Selector>
              {
                Abxy.items[AbxytabSelect].map((item, index) => (
                  <SelectItem bgImg={item.selet} onClick={() => myContext.setAbxy([AbxytabSelect, index])}></SelectItem>
                ))
              }
            </Selector>
          </SwiperSlide>
          
          {/*
              ██████╗ ██████╗  █████╗ ██████╗ 
              ██╔══██╗██╔══██╗██╔══██╗██╔══██╗
              ██║  ██║██████╔╝███████║██║  ██║
              ██║  ██║██╔═══╝ ██╔══██║██║  ██║
              ██████╔╝██║     ██║  ██║██████╔╝
              ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═════╝ 
          */}

          <SwiperSlide>
            <TopItems>
              {
                Dpad.steps.map((item, index) => (
                  <TapItem key={ index } keys={index} active={DpadtabSelect} onClick = {() => DpadSetTabSelect(index)}>
                    <span>
                      {item.name}
                    </span>
                    <span>
                      {item.price}
                    </span>
                    <div></div>
                  </TapItem>
                ))
              }
            </TopItems>
            <Selector>
              {
                Dpad.items[DpadtabSelect].map((item, index) => (
                  <SelectItem bgImg={item.selet} onClick={() => myContext.setDpad([DpadtabSelect, index])}></SelectItem>
                ))
              }
            </Selector>
          </SwiperSlide>

          {/*
            ████████╗██╗  ██╗██╗   ██╗███╗   ███╗██████╗     ██╗     
            ╚══██╔══╝██║  ██║██║   ██║████╗ ████║██╔══██╗    ██║     
               ██║   ███████║██║   ██║██╔████╔██║██████╔╝    ██║     
               ██║   ██╔══██║██║   ██║██║╚██╔╝██║██╔══██╗    ██║     
               ██║   ██║  ██║╚██████╔╝██║ ╚═╝ ██║██████╔╝    ███████╗
               ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝     ╚══════╝
          */}
          <SwiperSlide>
            <Selector>
              {
                ThumbL.items[ThumbLtabSelect].map((item, index) => (
                  <SelectItem bgImg={item.selet} onClick={() => myContext.setThumbstickL([ThumbLtabSelect, index])}></SelectItem>
                ))
              }
            </Selector>
          </SwiperSlide>

          {/**
           * ████████╗██╗  ██╗██╗   ██╗███╗   ███╗██████╗     ██████╗ 
             ╚══██╔══╝██║  ██║██║   ██║████╗ ████║██╔══██╗    ██╔══██╗
                ██║   ███████║██║   ██║██╔████╔██║██████╔╝    ██████╔╝
                ██║   ██╔══██║██║   ██║██║╚██╔╝██║██╔══██╗    ██╔══██╗
                ██║   ██║  ██║╚██████╔╝██║ ╚═╝ ██║██████╔╝    ██║  ██║
                ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝     ╚═╝  ╚═╝
           */}
            <SwiperSlide>
              <Selector>
                {
                  ThumbR.items[ThumbRtabSelect].map((item, index) => (
                    <SelectItem bgImg={item.selet} onClick={() => myContext.setThumbstickR([ThumbRtabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>

            {/**
             * ███████╗████████╗ █████╗ ██████╗ ████████╗    ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
               ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
               ███████╗   ██║   ███████║██████╔╝   ██║       ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
               ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
               ███████║   ██║   ██║  ██║██║  ██║   ██║       ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
               ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
             */}
             <SwiperSlide>
              <TopItems>
                {
                  StartBtn.steps.map((item, index) => (
                    <TapItem w={StartBtn.steps.length} key={ index } keys={index} active={StartBtntabSelect} onClick = {() => StartBtnSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  StartBtn.items[StartBtntabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setStartBtn([StartBtntabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>

            {/**
             * ████████╗ ██████╗ ██╗   ██╗ ██████╗██╗  ██╗██████╗  █████╗ ██████╗ 
               ╚══██╔══╝██╔═══██╗██║   ██║██╔════╝██║  ██║██╔══██╗██╔══██╗██╔══██╗
                  ██║   ██║   ██║██║   ██║██║     ███████║██████╔╝███████║██║  ██║
                  ██║   ██║   ██║██║   ██║██║     ██╔══██║██╔═══╝ ██╔══██║██║  ██║
                  ██║   ╚██████╔╝╚██████╔╝╚██████╗██║  ██║██║     ██║  ██║██████╔╝
                  ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═════╝ 
            */}
            <SwiperSlide>
              <TopItems>
                {
                  Touchpad.steps.map((item, index) => (
                    <TapItem w={Touchpad.steps.length} key={ index } keys={index} active={TouchpadtabSelect} onClick = {() => TouchpadSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Touchpad.items[TouchpadtabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setTouchpad([TouchpadtabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>
            {/**
             * ████████╗██████╗ ██╗███╗   ███╗
               ╚══██╔══╝██╔══██╗██║████╗ ████║
                  ██║   ██████╔╝██║██╔████╔██║
                  ██║   ██╔══██╗██║██║╚██╔╝██║
                  ██║   ██║  ██║██║██║ ╚═╝ ██║
                  ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝
             */}
             <SwiperSlide>
              <Selector>
                {
                  Trim.items[TrimtabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setTrim([TrimtabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>
            {/**
             * ████████╗██████╗ ██╗ ██████╗  ██████╗ ███████╗██████╗ 
               ╚══██╔══╝██╔══██╗██║██╔════╝ ██╔════╝ ██╔════╝██╔══██╗
                  ██║   ██████╔╝██║██║  ███╗██║  ███╗█████╗  ██████╔╝
                  ██║   ██╔══██╗██║██║   ██║██║   ██║██╔══╝  ██╔══██╗
                  ██║   ██║  ██║██║╚██████╔╝╚██████╔╝███████╗██║  ██║
                  ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝
            */}
            <SwiperSlide>
              <TopItems>
                {
                  Trigger.steps.map((item, index) => (
                    <TapItem w={Trigger.steps.length} key={ index } keys={index} active={TriggertabSelect} onClick = {() => TriggerSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Trigger.items[TriggertabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setTrigger([TriggertabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>
            {/**
             * ██████╗ ███████╗ █████╗ ██████╗     ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
               ██╔══██╗██╔════╝██╔══██╗██╔══██╗    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
               ██████╔╝█████╗  ███████║██████╔╝    ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
               ██╔══██╗██╔══╝  ██╔══██║██╔══██╗    ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
               ██║  ██║███████╗██║  ██║██║  ██║    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
               ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
            */}
            <SwiperSlide>
              <TopItems>
                {/* {
                  Trigger.steps.map((item, index) => (
                    <TapItem key={ index } keys={index} active={TriggertabSelect} onClick = {() => TriggerSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                } */}
              </TopItems>
              <Selector>
                {
                  RearDesign.items[RearDesigntabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setRearDesign([RearDesigntabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>

            {/**
             * ██████╗  █████╗ ███████╗ ██████╗ ██████╗     ██████╗  █████╗  ██████╗██╗  ██╗
               ██╔══██╗██╔══██╗╚══███╔╝██╔═══██╗██╔══██╗    ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝
               ██████╔╝███████║  ███╔╝ ██║   ██║██████╔╝    ██████╔╝███████║██║     █████╔╝ 
               ██╔══██╗██╔══██║ ███╔╝  ██║   ██║██╔══██╗    ██╔══██╗██╔══██║██║     ██╔═██╗ 
               ██║  ██║██║  ██║███████╗╚██████╔╝██║  ██║    ██████╔╝██║  ██║╚██████╗██║  ██╗
               ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
             * 
            */}
            <SwiperSlide>
              <RazorDiv flag={myContext.razorBack} onClick = {() => myContext.setRazorBack(!myContext.razorBack)}>
                <span>Razorback Maxfire Modes</span>
                <label>
                  <div>

                  </div>
                </label>
              </RazorDiv>
            </SwiperSlide>
            {/**
             * 
             * ██████╗  █████╗ ██████╗ ██████╗ ██╗     ███████╗
               ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║     ██╔════╝
               ██████╔╝███████║██║  ██║██║  ██║██║     █████╗  
               ██╔═══╝ ██╔══██║██║  ██║██║  ██║██║     ██╔══╝  
               ██║     ██║  ██║██████╔╝██████╔╝███████╗███████╗
               ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝
             */}
            <SwiperSlide>
              <PaddleWrapper>
                <RazorDiv flag={myContext.pad_esp_flag} onClick = {() => myContext.setPad_esp_flag(!myContext.pad_esp_flag)}>
                  <span>Paddles</span>
                  <label><div></div></label>
                </RazorDiv>
                {
                  myContext.pad_esp_flag ? (
                    <Selector>
                      {
                        Paddle.items.map((item, index) => (
                          <SelectItem key={index} bgImg={item.select} onClick={() => myContext.setPaddle(index)}></SelectItem>
                        ))
                      }
                    </Selector>
                  ) : (
                    <span>To have paddles, please turn on switch</span>
                  )
                }
              </PaddleWrapper>
            </SwiperSlide>
            {/**
             * ██╗     ███████╗███████╗████████╗    ██████╗  ██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗  ██████╗ ██████╗     ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
               ██║     ██╔════╝██╔════╝╚══██╔══╝    ██╔══██╗██╔═══██╗████╗ ████║██║████╗  ██║██╔══██╗██╔═══██╗██╔══██╗    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
               ██║     █████╗  █████╗     ██║       ██║  ██║██║   ██║██╔████╔██║██║██╔██╗ ██║╚█████╔╝██║   ██║██████╔╝    ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
               ██║     ██╔══╝  ██╔══╝     ██║       ██║  ██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██╗██║   ██║██╔══██╗    ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
               ███████╗███████╗██║        ██║       ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║╚█████╔╝╚██████╔╝██║  ██║    ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
               ╚══════╝╚══════╝╚═╝        ╚═╝       ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
             */}
             <SwiperSlide>
              <LDominWrapper>
                <RazorDiv flag={!myContext.pad_esp_flag} onClick = {() => myContext.setPad_esp_flag(!myContext.pad_esp_flag)}>
                  <span>Left Domin button</span>
                  <label><div></div></label>
                </RazorDiv>
                {
                  !myContext.pad_esp_flag ? (
                    <LDominContainer>
                      <div>
                        <div>
                          <div>
                            <span>{DominSelection.steps.name}</span>
                          </div>
                          <Selector>
                            {
                              DominSelection.items.map((item, index) => (
                                <SelectItem key={index} bgImg={item.select} onClick={() => myContext.setLdomin1(index)}></SelectItem>
                              ))
                            }
                          </Selector>
                        </div>
                        {
                          myContext.ldomin_1 !== null ? (
                            <div>
                              <div><span>{DominL.steps[0].name}</span></div>
                              <Selector>
                              {
                                DominL.items.map((item, index) => (
                                  <SelectItem key={index} bgImg={item.select} onClick={() => myContext.setLdomin2(index)}></SelectItem>
                                ))
                              }
                              </Selector>
                            </div>
                          ) : (() => {})()
                        }
                      </div>
                    </LDominContainer>
                  ) : (
                    <span>To have Left Domin button, please turn on switch</span>
                  )
                }
              </LDominWrapper>
            </SwiperSlide>
            {/**
             * ██████╗ ██╗ ██████╗ ██╗  ██╗████████╗    ██████╗  ██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗  ██████╗ ██████╗     ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
               ██╔══██╗██║██╔════╝ ██║  ██║╚══██╔══╝    ██╔══██╗██╔═══██╗████╗ ████║██║████╗  ██║██╔══██╗██╔═══██╗██╔══██╗    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
               ██████╔╝██║██║  ███╗███████║   ██║       ██║  ██║██║   ██║██╔████╔██║██║██╔██╗ ██║╚█████╔╝██║   ██║██████╔╝    ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
               ██╔══██╗██║██║   ██║██╔══██║   ██║       ██║  ██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██╗██║   ██║██╔══██╗    ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
               ██║  ██║██║╚██████╔╝██║  ██║   ██║       ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║╚█████╔╝╚██████╔╝██║  ██║    ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
               ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
             */}
             <SwiperSlide>
              <LDominWrapper>
                <RazorDiv flag={!myContext.pad_esp_flag} onClick = {() => myContext.setPad_esp_flag(!myContext.pad_esp_flag)}>
                  <span>Left Domin button</span>
                  <label><div></div></label>
                </RazorDiv>
                {
                  !myContext.pad_esp_flag ? (
                    <LDominContainer>
                      <div>
                        <div>
                          <div>
                            <span>{DominSelection.steps.name}</span>
                          </div>
                          <Selector>
                            {
                              DominSelection.items.map((item, index) => (
                                <SelectItem key={index} bgImg={item.select} onClick={() => myContext.setRdomin1(index)}></SelectItem>
                              ))
                            }
                          </Selector>
                        </div>
                        {
                          myContext.rdomin_1 !== null ? (
                            <div>
                              <div><span>{DominR.steps[0].name}</span></div>
                              <Selector>
                                {
                                  DominR.items.map((item, index) => (
                                    <SelectItem key={index} bgImg={item.select} onClick={() => myContext.setRdomin2(index)}></SelectItem>
                                  ))
                                }
                              </Selector>
                            </div>
                          ) : (() => {})()
                        }
                      </div>
                    </LDominContainer>
                  ) : (
                    <span>To have Left Domin button, please turn on switch</span>
                  )
                }
              </LDominWrapper>
            </SwiperSlide>
            {/**
             * ██████╗ ██╗ ██████╗ ██╗████████╗ █████╗ ██╗         ████████╗██████╗ ██╗ ██████╗  ██████╗ ███████╗██████╗ ███████╗
               ██╔══██╗██║██╔════╝ ██║╚══██╔══╝██╔══██╗██║         ╚══██╔══╝██╔══██╗██║██╔════╝ ██╔════╝ ██╔════╝██╔══██╗██╔════╝
               ██║  ██║██║██║  ███╗██║   ██║   ███████║██║            ██║   ██████╔╝██║██║  ███╗██║  ███╗█████╗  ██████╔╝███████╗
               ██║  ██║██║██║   ██║██║   ██║   ██╔══██║██║            ██║   ██╔══██╗██║██║   ██║██║   ██║██╔══╝  ██╔══██╗╚════██║
               ██████╔╝██║╚██████╔╝██║   ██║   ██║  ██║███████╗       ██║   ██║  ██║██║╚██████╔╝╚██████╔╝███████╗██║  ██║███████║
               ╚═════╝ ╚═╝ ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝       ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝
             */}
             <SwiperSlide>
              <RazorDiv flag={myContext.digital_trigger} onClick = {() => myContext.setDigital_trigger(!myContext.digital_trigger)}>
                <span>Digital Triggers</span>
                <label>
                  <div>

                  </div>
                </label>
              </RazorDiv>
            </SwiperSlide>
            {/**
             * 
             * ████████╗███████╗██╗  ██╗████████╗
               ╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝
                  ██║   █████╗   ╚███╔╝    ██║   
                  ██║   ██╔══╝   ██╔██╗    ██║   
                  ██║   ███████╗██╔╝ ██╗   ██║   
                  ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   
             */}
             <SwiperSlide>
              <RazorDiv flag={myContext.isText} onClick = {() => myContext.setIsText(!myContext.isText)}>
                <span>
                  {
                    !myContext.isText ? 'Add ' : 'Remove '
                  } 
                  text
                  </span>
                <label> <div /> </label>
              </RazorDiv>
              {
                !myContext.isText ? (() => {})() : (
                  <TextDiv>
                    <input type="text" className="added-text" maxLength="14" value={myContext.textVal} onChange={(e) => myContext.setTextVal(e.target.value)} />
                    <select className="font-type" onChange={(e) => myContext.setFamily(e.target.value)}>
                      {
                        myContext.fontFamiles.map((item, index) => (
                          <FontOption family={item.family} key={index} value={index} >
                            {
                              item.name
                            }
                          </FontOption>
                        ))
                      }
                    </select>
                  </TextDiv>
                )
              } 
             </SwiperSlide>
             {/**
              * ██╗      ██████╗  ██████╗  ██████╗ 
                ██║     ██╔═══██╗██╔════╝ ██╔═══██╗
                ██║     ██║   ██║██║  ███╗██║   ██║
                ██║     ██║   ██║██║   ██║██║   ██║
                ███████╗╚██████╔╝╚██████╔╝╚██████╔╝
                ╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ 
              */}
              <SwiperSlide>
                <RazorDiv flag={myContext.isLogo} onClick = {() => myContext.setLogo(!myContext.isLogo)}>
                  <span>
                    {
                      !myContext.isLogo ? 'Add ' : 'Remove '
                    } 
                    Logo
                    </span>
                  <label> <div /> </label>
                </RazorDiv>
                {
                  !myContext.isLogo ? (() => {})() : (
                    <TextDiv>
                      <ImageUploading
                        value={myContext.images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                      >
                        {({
                          imageList,
                          onImageUpload,
                          onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                        }) => (
                          // write your building UI
                          <div className="upload__image-wrapper">
                            <button
                              style={isDragging ? { color: 'red' } : undefined}
                              onClick={onImageUpload}
                              {...dragProps}
                            >
                              Click here to upload image
                            </button>
                            {/* {myContext.images.map((image, index) => (
                              <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                              </div>
                            ))} */}
                          </div>
                        )}
                      </ImageUploading>
                    </TextDiv>
                  )
                } 
              </SwiperSlide>
        </Swiper>
      </MediumDiv>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 30%;
  background-color: ${props => props.theme.ToolBgColor};
  border-left: 3px solid ${props => props.theme.ThemeColor};
  
  @media screen and (max-width: 800px) {
    /* display: none; */
  }
`

const TopDiv = styled.div`
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 10px;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
      color: ${props => props.theme.color};
      font-family: 'Rajdhani-Medium';
      font-size: 20px;
      img {
        content: url(${props => props.theme.GameConsoleImg});
      }
      @media screen and (max-width: 1194px) {
        width: 100%;
        justify-content: start;
      }
    }
  
    @media screen and (max-width: 1194px) {
      flex-direction: column;
    }
  }
`
const TopItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const TapItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(65% / ${props => props.w});
  background-color: ${props => props.keys === props.active ? props.theme.TapSelectBgColor : props.theme.TapBgColor};
  color: ${props => props.keys === props.active ? props.theme.TapSelectColor : props.theme.TapColor};
  border-radius: 5px;
  font-family: 'Rajdhani-Medium';
  position: relative;
  padding: 10px 10px;
  cursor: pointer;
  & > span:nth-child(1) {
    font-size: 15px;
    white-space: nowrap;
  }
  div {
    position: absolute;
    background-color: ${props => props.keys === props.active ? props.theme.ThemeColor : 'none'};
    width: 80%;
    height: 3px;
    bottom: 0;
  }
`

const SwiperProcessor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${props => props.theme.color};
    font-family: 'Rajdhani-Medium';
  }
  & > span:nth-child(2) {
    padding: 5px 12px;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.DirectIconBgColor};
    border-radius: 10px;
    img {
      content: url(${props => props.theme.LeftDirectIconImg});
    }
    cursor: pointer;
  }
  & > span:nth-child(3) {
    padding: 5px 12px;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.DirectIconBgColor};
    border-radius: 10px;
    img {
      content: url(${props => props.theme.RightDirectIconImg});
    }
    cursor: pointer;
  }
`

const MediumDiv = styled.div`
  height: calc(100vh - 95px - 177px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.ScrollTraker};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${props => props.theme.ScrollBar};
  }
`

const Selector = styled.div`
  background-color: ${props => props.theme.ToolBgColor};
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 10px;
  justify-content: flex-start;
  align-content: flex-start;
  height: 100%;
  
`

const SelectItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid white;
  color: white;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`

const RazorDiv = styled.div`
  display: flex;
  background-color: ${props => props.theme.DirectIconBgColor};
  margin: 10px;
  padding: 0 20px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Rajdhani-Medium';
  color: ${props => props.theme.color};
  border: ${props => props.theme.DirectIconBorder};
  & > label:nth-child(2) {
    width: 60px;
    height: 50%;
    background-color: ${props => props.flag ? props.theme.ThemeColor : '#aaa'};
    border-radius: 20px;
    position: relative;
    div {
      position: absolute;
      background-color: white;
      display: inline-block;
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 20px;
      transition: all .5s;
      top: 0;
      ${props => props.flag ? 'right' : 'left'}: 1px;
    }
  }
`

const PaddleWrapper = styled.div`

`
const LDominWrapper = styled.div`

`

const LDominContainer = styled.div`
  padding: 0 10px;
  & > div:nth-child(1) {
    border: 1px solid ${props => props.theme.ThemeColor};
    & > div:nth-child(1), > div:nth-child(2) {
      & > div:nth-child(1) {
        display: flex;
        background-color: ${props => props.theme.DirectIconBgColor};
        margin: 10px;
        padding: 0 20px;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        font-family: 'Rajdhani-Medium';
        color: ${props => props.theme.color};
        border: ${props => props.theme.DirectIconBorder};
        color: ${props => props.theme.color}
      }
    }
  }
`

const TextDiv = styled.div`
  margin: 10px;
  border: 1px solid ${props => props.theme.ThemeColor};
  padding: 10px;
  color: ${props => props.theme.color};
  .added-text {
    color: ${props => props.theme.color};
    width: calc(100% - 2 * 10px);
    padding: 10px;
    outline: none;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.HeadIconBgColor};
    margin-bottom: 20px;
  }
  .font-type {
    color: ${props => props.theme.color};
    width: 100%;
    padding: 10px;
    outline: none;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.DirectIconBgColor};
    margin-bottom: 20px;
  }
`

const FontOption = styled.option`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  outline: none;
  border: ${props => props.theme.DirectIconBorder};
  margin-bottom: 20px;
  min-height: 30px;
  height: 20px;
  font-family: ${props => props.family};
`;

const UploadImg = styled.div`
  margin: 10px;
  border: 1px solid ${props => props.theme.ThemeColor};
  padding: 10px;
  color: ${props => props.theme.color};
`

export default Tools;