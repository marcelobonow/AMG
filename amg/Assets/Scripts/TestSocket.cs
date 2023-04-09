using Socket.Quobject.SocketIoClientDotNet.Client;
using UnityEngine;

public class TestSocket : MonoBehaviour
{
  private QSocket socket;
  [SerializeField] private string url;

  private void Start()
  {
    Debug.Log("start");
    socket = IO.Socket(url);

    socket.On(QSocket.EVENT_CONNECT, () =>
    {
      Debug.Log("Connected");
      socket.Emit("message", "test");
    });

    socket.On("message", data =>
    {
      Debug.Log("data : " + data);
    });

    Debug.Log("AQUI!");
  }

  private void OnDestroy()
  {
    socket.Disconnect();
  }
}