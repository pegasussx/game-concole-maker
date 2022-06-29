import * as React from "react";
import Moveable from "react-moveable";
import styled from "styled-components";
import AppContext from "../../context/context";

export default function ImageMove() {
	const myContext = React.useContext(AppContext);
  const [target, setTarget] = React.useState();
  const [frame] = React.useState({
    translate: [0, 0],
    rotate: 0
  });
  const moveableRef = React.useRef();
  React.useEffect(() => {
    const target = document.querySelector('.target1');
		if (target !== null) {
			setTarget(target);
	
			target.addEventListener("load", () => {
				setTimeout(() => {
					moveableRef.current.updateRect();
				}, 2000);
			});
		}
  }, [myContext.fontSize, myContext.isText, myContext.textVal]);
  return (
    <Wrapper className="container" display={myContext.isText} sideflag={myContext.sideflag} ff={myContext.fontFamiles[myContext.familyId].family} tc={myContext.textColor} ts={myContext.fontSize+"px "}>
      {
				<div>
					<h1 class="target1" style={{width: "200px", zIndex:"300"}}>
						{
							myContext.textVal
						}
					</h1>
				</div>
			}
			{
				myContext.isText && myContext.sideflag && (myContext.snapIndex === 15 || myContext.snapIndex === 16) ?
					<Moveable
						ref={moveableRef}
						target={target}
						draggable={true}
						throttleDrag={0}
						resizable={true}
						throttleResize={0}
						rotatable={true}
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
	/* width: 100%;
	height: 100%; */
	.moveable-control-box {
		position: fixed !important;
		top: unset;
		left: unset;
		z-index	: 10;
	}
	div {
		/* width: 100%;
		height: 100%; */
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
		}
	}
`