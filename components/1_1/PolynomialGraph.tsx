import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: 0, y: 1 },
  { x: 1, y: 2.5 },
  { x: 2, y: 3.8 },
  { x: 3, y: 5 },
];

export default function PolynomialGraph() {
  return (
    <div className="my-10">
      <h3 className="text-xl font-semibold mb-4">다항식 곡선 피팅 예시</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
