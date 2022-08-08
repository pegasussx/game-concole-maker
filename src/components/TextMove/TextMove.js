import * as React from "react";
import Moveable from "react-moveable";
import styled, { css } from "styled-components";
import AppContext from "../../context/context";
import $ from 'jquery';

export default function ImageMove() {
	const font_zoom = [0.7, 0.7, 1, 0.4, 0.6, 0.6];

	const myContext = React.useContext(AppContext);
	const textRef = React.useRef();
  const [target, setTarget] = React.useState();
  const [frame] = React.useState({
		translate: [0, 0],
    rotate: 0
  });

	const [winWidth, setWinWidth] = React.useState(null);
	React.useEffect(() => {
		window.addEventListener("resize", console.log('Hello'));
	}, [])

	
	$(window).resize(function() {
		setWinWidth(window.innerWidth);
		console.log(textRef);
	});

	// React.useEffect(() => {
	// 	if (winWidth <= 800) {
	// 		myContext.setTxtStatus(false);
	// 	}
	// }, [winWidth]);
  const moveableRef = React.useRef();
  
	React.useEffect(() => {
    const target = document.querySelector('.target1');
		setWinWidth(window.innerWidth);
		if (target !== null) {
			setTarget(target);
	
			target.addEventListener("load", () => {
				setTimeout(() => {
					moveableRef.current.updateRect();
				}, 2000);
			});
		}
  }, [myContext.fontSize, myContext.isText, myContext.textVal, winWidth]);

  return (
    <Wrapper className="container" display={myContext.isText} sideflag={myContext.sideflag} ff={myContext.fontFamiles[myContext.familyId].family} tc={myContext.textColor} ts={Number(myContext.fontSize) * font_zoom[myContext.familyId]  +"px "} width={winWidth}>
      		{
				<div>
					<h1 ref={textRef} className="target1" id="txtmove" style={{
						width: winWidth <= 800 ? '100% !important' : 'unset',
					}}>
						{
							myContext.textVal
						}
					</h1>
				</div>
			}
			{
				myContext.isText && myContext.sideflag && myContext.txtStatus && winWidth >= 800 ?
					<Moveable
						ref={moveableRef}
						target={target}
						draggable={true}
						throttleDrag={0}
						resizable={true}
						throttleResize={0}
						rotatable={true}
						scalable={true}
						rotationPosition={"top"}
						throttleRotate={0}
						origin={false}
						onDragStart={({ set }) => {
							set(frame.translate);
						}}
						onDrag={({ beforeTranslate }) => {
							frame.translate = beforeTranslate;
						}}
						onResizeStart={({ setOrigin, dragStart }) => {
							setOrigin(["%", "%"]);
							dragStart && dragStart.set(frame.translate);
						}}
						onResize={({ target, width, height, drag }) => {
							frame.translate = drag.beforeTranslate;
							target.style.width = `${width}px`;
							target.style.height = `${height}px`;
						}}
						onRotateStart={({ set }) => {
							set(frame.rotate);
						}}
						onRotate={({ beforeRotate }) => {
							frame.rotate = beforeRotate;
						}}
						onRender={({ target }) => {
							target.style.transform = `translate(${frame.translate[0]}px, ${
								frame.translate[1]
							}px) rotate(${frame.rotate}deg)`;
						}}
						renderDirections={["nw", "ne", "se", "sw"]}
					/>
				: (() => {})()
			}
    </Wrapper>
  );
}



const Wrapper = styled.div`
  position: absolute;
  word-break: break-all;
  z-index: 101;
	display: ${props => props.display ? 'flex' : 'none'};
	transition: all 1s;
	width: 100%;
	height: 100%;
	.moveable-control-box {
		position: fixed !important;
		top: unset;
		left: unset;
		z-index	: 10;
	}
	div {
		width: ${props => props.width < 800 ? '100%' : 'unset'};
		/* width: 100%;
		height: 100%; */
		white-space: nowrap;
		${props => {
			if (props.width < 800) {
				return css`
					display: flex;
					justify: center;
				`;
			}
		}}
		h1 {
			display: flex;
			justify-content: center;
			align-items: center;
			-webkit-user-select: none; /* Safari */
			-ms-user-select: none; /* IE 10 and IE 11 */
			user-select: none; /* Standard syntax */
			overflow: hidden;
			font-size: ${props => props.ts};
			font-family: ${props => props.ff};
			color: ${props => props.tc};
			overflow: ${props => props.width < 800 ? 'visible' : 'hidden'};
			width: ${props => props.width < 800 ? '100%!important' : 'unset'};
			${props => {
			if (props.width < 800) {
				return css`
					transform: unset !important;
				`;
			}
		}}
		}
		@media screen and (max-width: 600px) {
			transform: scale(0.5);
		}
		@media screen and (max-width: 500px) {
			transform: scale(0.4);
		}
		@media screen and (max-width: 400px) {
			transform: scale(0.3);
		}
	}
`