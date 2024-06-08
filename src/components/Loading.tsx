import { useRecoilValue } from 'recoil'
import { imageHeight } from '../store/atoms'

function Loading() {
	const size = useRecoilValue(imageHeight)
	return (
		<svg
			// style="margin: auto; background: none; display: block; shape-rendering: auto;"
			width={`${size}px`}
			height={`${size}px`}
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<circle
				cx="50"
				cy="50"
				r="36.8734"
				fill="none"
				stroke="#e90c59"
				strokeWidth="2"
			>
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="1s"
					values="0;40"
					keyTimes="0;1"
					keySplines="0 0.2 0.8 1"
					calcMode="spline"
					begin="-0.5s"
				></animate>
				<animate
					attributeName="opacity"
					repeatCount="indefinite"
					dur="1s"
					values="1;0"
					keyTimes="0;1"
					keySplines="0.2 0 0.8 1"
					calcMode="spline"
					begin="-0.5s"
				></animate>
			</circle>
			<circle
				cx="50"
				cy="50"
				r="19.031"
				fill="none"
				stroke="#46dff0"
				strokeWidth="2"
			>
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="1s"
					values="0;40"
					keyTimes="0;1"
					keySplines="0 0.2 0.8 1"
					calcMode="spline"
				></animate>
				<animate
					attributeName="opacity"
					repeatCount="indefinite"
					dur="1s"
					values="1;0"
					keyTimes="0;1"
					keySplines="0.2 0 0.8 1"
					calcMode="spline"
				></animate>
			</circle>
		</svg>
	)
}

export default Loading
