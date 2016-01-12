import * as URI from 'urijs'

/**
 * Zone types
 */
interface Encounter {
	id: number
	name: string
}

interface Bracket {
	id: number
	name: string
}

interface Zone {
	id: number
	name: string
	frozen: boolean
	encounters: Encounter[]
	brackets: Bracket[]
}

/**
 * Class types
 */
interface Specialization {
	id: number
	name: string
}

interface PlayerClass {
	id: number
	name: string
	specs: Specialization[]
}



/**
 * WarcraftLogsClient
 */
class WarcraftLogsClient {
	
	constructor(private apiKey: string, private apiUrl: string = 'https://www.warcraftlogs.com:443/v1') {}
	
	public async getZones() {
		try {
			const response = await fetch(this.generateUrl('/zones'))
			const json = await response.json()
			return json as Zone[]
		} catch (error) {
			
		}
	}
	
	public async getClasses() {
		try {
			const response = await fetch(this.generateUrl('/classes'))
			const json = await response.json()
			return json
		} catch (error) {
			console.error(error)
		}
	}

	public async getEncounterRankings(encounterId: number,
									  metric?: string,
									  size?: string,
									  difficulty?: string,
									  region?: number,
									  playerClass?: number,
									  specialization?: number,
									  bracket?: number,
									  limit?: number,
									  page?: number,
									  filter?: string) {
		try {
			const response = await fetch(this.generateUrl(`/rankings/encounter/${encounterId}`))
			const json = await response.json()
			return json	
		}
		catch(error) {
			console.error(error)
		}
	}
	
	public async getCharacterRankings(characterName: string, serverName: string, serverRegion: string) {
		try {
			const response = await fetch(this.generateUrl(`/rankings/character/${characterName}/${serverName}/${serverRegion}`))
			const json = await response.json()
			return json	
		}
		catch(error) {
			console.error(error)
		}
	}
	
	private generateUrl(path: string) {
		return URI(`${this.apiUrl}${path}?api_key=${this.apiKey}`)
			.normalize()
			.valueOf()
	}
}