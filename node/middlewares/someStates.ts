export async function someStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  // console.info('teste', ctx.body)

  const orderId = await ctx.body.orderId
  console.info('Dados', orderId)
  // 1157751060419-01


  const fetch = require('node-fetch');
  const url = `https://hiringcoders202125.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': 'vtexappkey-hiringcoders202125-BGFZQM',
      'X-VTEX-API-AppToken': 'UALECZEIDRTFPAUMTOAHIZLORVRISLBZLISVXKMURFNCURHPSLANUKEVOWMHIWQRQTTHIYPIBGPCMIUANBPHLNEADXGBYFMVPVMAXAHUWSMOVBIGBLTGGIGDPTEKRNJV'
    }
  };

  // fetch(url, options)
  //   .then((res: any) => {
  //     if (res.ok) {
  //       res.json()
  //         .then((json: any) => {
  //           const document: String = json.clientProfileData.document
  //         }
  //         )
  //     } else {
  //       console.log('Network response was not ok.')
  //     }
  //   })
  //   .catch((err: any) => console.error('There has been a problem with your fetch operation: ' + err));

  fetch(url, options)
    .then((res: any) => res.json())
    .then((json: any) => {
      return json.clientProfileData.email.split("-", 1)
    })
    .catch((err: any) => console.error('error:' + err));

  await console.log()

  await next()

}

