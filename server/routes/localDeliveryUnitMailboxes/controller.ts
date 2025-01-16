import { RequestHandler, RequestHandlerWithServices } from '../../services'

export const index: RequestHandlerWithServices =
  ({ mailboxRegisterService }) =>
  async (req, res, next) => {
    // @ts-expect-error - temporary linting bypass
    const mailboxes = await mailboxRegisterService.listLocalDeliveryUnitMailboxes(req?.middleware?.clientToken)

    res.render('pages/lduMailboxes/index', { mailboxes })
  }

export const create: RequestHandlerWithServices =
  ({ mailboxRegisterService }) =>
  async (req, res, next) => {
    const { name, emailAddress, country, unitCode, areaCode } = req.body

    const mailbox = {
      name,
      emailAddress,
      country,
      unitCode,
      areaCode,
    }

    // @ts-expect-error - temporary linting bypass
    await mailboxRegisterService.createLocalDeliveryUnitMailbox(req?.middleware?.clientToken, mailbox)

    res.redirect('/local-delivery-unit-mailboxes')
  }

export const newMailbox: RequestHandler = async (req, res, next) => res.render('pages/lduMailboxes/new')