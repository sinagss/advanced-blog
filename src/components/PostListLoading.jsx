import { Row, Col, Card } from "antd";

export default function PostListLoading() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Card loading bordered={false} />
      </Col>
      <Col span={8}>
        <Card loading bordered={false} />
      </Col>
      <Col span={8}>
        <Card loading bordered={false} />
      </Col>
      <Col span={8}>
        <Card loading bordered={false} />
      </Col>
      <Col span={8}>
        <Card loading bordered={false} />
      </Col>
      <Col span={8}>
        <Card loading bordered={false} />
      </Col>
    </Row>
  );
}
