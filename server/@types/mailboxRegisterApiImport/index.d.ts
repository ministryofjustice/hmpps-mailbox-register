export interface components {
  schemas: {
    LocalDeliveryUnitMailbox: {
      id: string
      unitCode: string
      areaCode: string
      emailAddress: string
      country?: string
      name?: string
      createdAt: string
      updatedAt: string
    }

    CreateLocalDeliveryUnitMailboxRequest: {
      unitCode: string
      areaCode: string
      emailAddress: string
      country?: string
      name?: string
    }

    OffenderManagementUnitMailbox: {
      id: string
      name: string
      emailAddress: string
      prisonCode: string
      role: string
      createdAt: string
      updatedAt: string
    }

    CreateOffenderManagementUnitMailboxRequest: {
      name: string
      emailAddress: string
      prisonCode: string
      role: string
    }
  }
}
