
function Image({
    src='',
    alt='',
    className='',
    onClick,
    ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`border-2 border-black p-3 ${className}`}
      {...props}
    />
  )
}

export default Image