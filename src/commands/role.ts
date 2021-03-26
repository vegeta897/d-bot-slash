import {
	CommandContext,
	CommandOptionType,
	SlashCommand,
	SlashCreator,
} from 'slash-create'

export default class RoleCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'role',
			description: 'Gets info for a role.',
			guildIDs: ['103749388010016768'],
			options: [
				{
					type: CommandOptionType.ROLE,
					name: 'role',
					description: 'Role to query',
					required: true,
				},
			],
		})
		this.filePath = __filename
	}
	async run(ctx: CommandContext) {
		const role = ctx.roles.get(<string>ctx.options.role)!
		let response = `Info for role **${role.name}**`
		response += `\nID: ${role.id}`
		if (role.color) response += `\nColor: ${role.colorHex}`
		response += `\nMentionable: ${role.mentionable ? 'Yes' : 'No'}`
		return response
	}
}
