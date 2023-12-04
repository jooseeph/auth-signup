import { useBackgroundStyles } from './../background.style';

function LeftColumn(props: any) {
  const { leftColumn } = useBackgroundStyles();
  return (
    <div className={leftColumn}>
      {props.logoVisible && (
        <h1 style={{ margin: ' 30px 40px', color: '#C6553B' }}>
          Your Logo
        </h1>
      )}

      {props.vectorVisible && (
        <img
          style={{
            marginLeft: 131,
            height: '36%',
            borderBottom: '1px solid black',
            transform: 'translate(50%, 50%)',
          }}
          src='/src/assets/images/Saly-Left.svg'
          alt=''
        />
      )}
    </div>
  );
}

export default LeftColumn;
