import { RequestHandler, Router } from 'express'
import { Services } from '../services'
import * as home from './home/controller'
import * as localDeliveryUnitMailboxes from './localDeliveryUnitMailboxes/controller'
import * as offenderManagementUnitMailboxes from './offenderManagementUnitMailboxes/controller'
import * as probationTeams from './probationTeams/controller'
import asyncMiddleware from '../middleware/asyncMiddleware'

export default (services: Services): Router => {
  const router = Router()

  const get = (path: string, ...handlers: RequestHandler[]) => router.get(path, handlers.map(asyncMiddleware))
  const post = (path: string, ...handlers: RequestHandler[]) => router.post(path, handlers.map(asyncMiddleware))
  const destroy = (path: string, ...handlers: RequestHandler[]) => router.delete(path, handlers.map(asyncMiddleware))

  get('/', home.index)

  get('/local-delivery-unit-mailboxes', localDeliveryUnitMailboxes.index(services))
  get('/local-delivery-unit-mailboxes/new', localDeliveryUnitMailboxes.newMailbox)
  post('/local-delivery-unit-mailboxes', localDeliveryUnitMailboxes.create(services))
  get('/local-delivery-unit-mailboxes/:id/edit', localDeliveryUnitMailboxes.edit(services))
  post('/local-delivery-unit-mailboxes/:id', localDeliveryUnitMailboxes.update(services))
  get('/local-delivery-unit-mailboxes/:id/delete', localDeliveryUnitMailboxes.confirmDelete(services))
  destroy('/local-delivery-unit-mailboxes/:id', localDeliveryUnitMailboxes.deleteMailbox(services))

  get('/offender-management-unit-mailboxes', offenderManagementUnitMailboxes.index(services))
  get('/offender-management-unit-mailboxes/new', offenderManagementUnitMailboxes.newMailbox(services))
  post('/offender-management-unit-mailboxes', offenderManagementUnitMailboxes.create(services))
  get('/offender-management-unit-mailboxes/:id/edit', offenderManagementUnitMailboxes.edit(services))
  post('/offender-management-unit-mailboxes/:id', offenderManagementUnitMailboxes.update(services))
  get('/offender-management-unit-mailboxes/:id/delete', offenderManagementUnitMailboxes.confirmDelete(services))
  destroy('/offender-management-unit-mailboxes/:id', offenderManagementUnitMailboxes.deleteMailbox(services))

  get('/probation-teams/new', probationTeams.newProbationTeam(services))
  post('/probation-teams', probationTeams.create(services))

  return router
}
