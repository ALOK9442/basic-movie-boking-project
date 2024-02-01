
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
      className={`border-2 border-black p-1 bg-amber-500 ${className}`}
      onClick={onClick}
      {...props}
    />
  )
}

export default Image