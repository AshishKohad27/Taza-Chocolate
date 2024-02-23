export default function TableRowBody() {
  return (
    <tbody>
      {new Array({}, {}, {}, {}, {}, {}, {}).map((item,index) => (
        <tr key={index}>
          <td colSpan={5}>
            <div className="h-28 bg-gray-200  dark:bg-gray-700 w-full border-b"></div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
