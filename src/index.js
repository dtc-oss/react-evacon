import React from 'react'
import { string, bool } from 'prop-types'
import eva from 'eva-icons'
import 'eva-icons/style/eva-icons.css'

const { icons } = eva
const Evacon = ({
  type, 
  width = 24, 
  height = 24, 
  animationType,
  animationHover,
  animationInfinity,
  fill,
  className,
  style,
  ...props }) => {

  const animation = animationType ? 
    {type: animationType, hover: animationHover, infinity: animationInfinity} : null

  const _props = {
    height,
    width,
    fill,
    animation,
    ...props
  }
  return (
    <i className={className} style={style} dangerouslySetInnerHTML={{
      __html: icons[type].toSvg({..._props})
    }}></i>
  )
}

export default Evacon

Evacon.propTypes = {
  type: string,
  animationType: string,
  animationHover: bool,
  animationInfinity: bool
}