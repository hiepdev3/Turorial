import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Chất lượng',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Chúng tôi luôn đặt chất lượng sản phẩm lên hàng đầu, mỗi mặt hàng đều được kiểm định kỹ lưỡng,
       đạt tiêu chuẩn cao nhất. Cam kết mang đến cho khách hàng những sản phẩm bền bỉ, an toàn và đáng giá. Sự hài lòng của bạn là thước đo thành công của chúng tôi.
      </>
    ),
  },
  {
    title: 'Uy tín',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Xây dựng lòng tin là trọng tâm của chúng tôi. Mọi giao dịch đều minh bạch, sản phẩm đúng như cam kết, 
        dịch vụ luôn đáng tin cậy. Chúng tôi tự hào là nơi khách hàng gửi gắm niềm tin lâu dài.
      </>
    ),
  },
  {
    title: 'Tận tâm',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Đội ngũ của chúng tôi phục vụ bằng cả trái tim, luôn lắng nghe và hỗ trợ tận tình. Từ tư vấn đến hậu mãi,
        chúng tôi nỗ lực mang lại trải nghiệm mua sắm chu đáo, thoải mái nhất cho bạn.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
