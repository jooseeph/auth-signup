import { useBackgroundStyles } from './../background.style';

function RightColumns(props: any) {
  const { rightColumn } = useBackgroundStyles();

  return (
    <div className={rightColumn}>
      {props.vectorVisible && (
        <img
        style={{
          marginLeft: 200,
          marginTop:144,

          height: '60%',
        }}
          src='/src/assets/images/Saly-Right.svg'
          alt=''
        />
      )}
    </div>
  );
}

export default RightColumns;
