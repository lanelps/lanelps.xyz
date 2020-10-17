import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet='utf-8' />
				<meta httpEquiv='x-ua-compatible' content='ie=edge' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				<script
					key='maximeheckel-theme'
					dangerouslySetInnerHTML={{
						__html: `(function() {
          try {
            var time = new Date().getHours();

            if (time > 6 && time <= 18) {
              document.documentElement.style.setProperty('--color-main-bg', '#fff')
              document.documentElement.style.setProperty('--color-main', '#000')
              document.documentElement.style.setProperty('--color-purple', '#cbcbff')
            } else {
              document.documentElement.style.setProperty('--color-main-bg', '#000')
              document.documentElement.style.setProperty('--color-main', '#fff')
              document.documentElement.style.setProperty('--color-purple', '#51516e')
            }
          } 
          catch (e) {

          }
        })();`,
					}}
				/>
				{props.preBodyComponents}
				<div
					key={`body`}
					id='___gatsby'
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	)
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}
