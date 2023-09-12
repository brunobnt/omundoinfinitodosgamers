<script>
	import TripleHearts from '$lib/assets/icons/triple-hearts-icon.svg';

	let name = '';
	let email = '';
	let organization = '';
	let lgpd = false;

	$: allowedButton = name && email && organization && lgpd;
</script>

<div id="mlb2-6899563" class="ml-subscribe-form ml-subscribe-form-6899563">
	<div class="ml-form-wrapper">
		<div class="row-form">
			<div class="ml-form-embedContent">
				<h2>Acesso Completo</h2>
				<p>Inscreva-se abaixo para receber nosso relatório completo!</p>
			</div>
			<form
				class="ml-block-form"
				action="https://assets.mailerlite.com/jsonp/264856/forms/95964841270839169/subscribe"
				data-code=""
				method="post"
				target="_blank"
			>
				<div class="ml-form-formContent">
					<div class="ml-field-name ml-validate-required">
						<input
							aria-label="name"
							aria-required="true"
							type="text"
							class="form-control"
							data-inputmask=""
							name="fields[name]"
							placeholder="Nome"
							bind:value={name}
						/>
					</div>
					<div class="ml-field-email ml-validate-email ml-validate-required">
						<input
							aria-label="email"
							aria-required="true"
							type="email"
							class="form-control"
							data-inputmask=""
							name="fields[email]"
							placeholder="E-mail"
							bind:value={email}
						/>
					</div>
					<div class="ml-field-company ml-validate-required">
						<input
							aria-label="company"
							aria-required="true"
							type="text"
							class="form-control"
							data-inputmask=""
							name="fields[company]"
							placeholder="Empresa/Instituição"
							bind:value={organization}
						/>
					</div>
				</div>
				<div class="ml-form-embedPermissions">
					<h3>LGPD</h3>
					<p>
						Não compartilhamos suas informações com terceiros. Seus dados serão armazenados
						preservando sua privacidade digital!
					</p>
				</div>
				<input type="hidden" name="ml-submit" value="1" />
				<div class="ml-form-embedPermissionsOptions">
					<div class="ml-form-embedPermissionsOptionsCheckbox">
						<label>
							<input
								type="checkbox"
								name="gdpr[]"
								value="Email"
								xp-if="gdpr.title"
								bind:checked={lgpd}
							/>
							<div class="label-description">
								Ao clicar aqui, estou de acordo com a Política de Privacidade.
							</div>
						</label>
					</div>
				</div>
				<div class="ml-form-embedSubmit">
					<button
						type="submit"
						disabled={allowedButton ? '' : 'disabled'}
						class={allowedButton ? 'submit-allowed' : 'submit-disabled'}
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
		<div class="ml-form-successBody row-success" style="display: none">
			<div class="ml-form-successContent">
				<img src={TripleHearts} alt="" />
				<h3>Obrigada!</h3>
				<p>Você receberá nosso relatório completo em seu e-mail dentro de alguns instantes.</p>
			</div>
		</div>
	</div>
</div>

<style>
	#mlb2-6899563 {
		align-items: center;
		display: flex;
		justify-content: center;
		text-align: center;
	}

	#mlb2-6899563 .ml-form-embedContent h2 {
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		text-transform: uppercase;
	}

	#mlb2-6899563 .ml-form-embedContent p,
	#mlb2-6899563 .ml-form-successContent p {
		font-family: 'Fraunces', serif;
		font-weight: 300;
		line-height: 130%;
		width: 100%;
	}

	#mlb2-6899563 .ml-form-wrapper {
		background-color: var(--color-black);
		color: var(--color-white);
		padding: 2rem 1.5rem 2rem 1.5rem;
	}

	#mlb2-6899563 .ml-block-form {
		width: 100%;
	}

	#mlb2-6899563 .ml-form-formContent {
		display: flex;
		flex-direction: column;
	}

	#mlb2-6899563 .ml-form-formContent input {
		border: 1px solid var(--color-gray-light);
		color: var(--color-black);
		font-family: 'Overpass', sans-serif;
		font-weight: 300;
		width: 100%;
	}

	#mlb2-6899563 .ml-form-embedPermissions h3,
	#mlb2-6899563 .ml-form-successContent h3 {
		font-family: 'Fraunces', serif;
		font-weight: 900;
		text-transform: uppercase;
	}

	#mlb2-6899563 .ml-form-embedPermissions p {
		font-family: 'Overpass', sans-serif;
		font-weight: 300;
		line-height: 125%;
		margin: 0 auto;
		width: 100%;
	}

	#mlb2-6899563 button {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
		border-radius: 0.25rem;
		box-shadow: 2px 4px 8px rgb(0 0 0 / 0.75);
		color: var(--color-white);
		cursor: pointer;
		display: flex;
		font-family: 'Fraunces', serif;
		font-weight: 700;
		justify-content: center;
		width: 100%;
	}

	#mlb2-6899563 button.submit-disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	#mlb2-6899563 .ml-form-embedPermissionsOptionsCheckbox label {
		align-items: flex-start;
		color: var(--color-white);
		display: flex;
		font-family: 'Overpass', sans-serif;
		font-weight: 300;
		justify-content: center;
		line-height: 125%;
		text-align: left;
	}

	#mlb2-6899563 .ml-form-successBody img {
		margin: 0 auto 1.5rem auto;
		height: auto;
		width: 50%;
	}

	@media only screen and (max-width: 768px) {
		#mlb2-6899563 {
			margin: 2rem 0;
			width: 100%;
		}

		#mlb2-6899563 .ml-form-embedContent h2 {
			font-size: 3.25rem;
		}

		#mlb2-6899563 .ml-form-embedContent p,
		#mlb2-6899563 .ml-form-successContent p {
			font-size: 1rem;
			margin-bottom: 0.25rem;
		}

		#mlb2-6899563 .ml-form-wrapper {
			border-radius: 0.5rem;
		}

		#mlb2-6899563 .ml-block-form {
			margin-top: 1.5rem;
		}

		#mlb2-6899563 .ml-form-formContent {
			gap: 0.75rem;
		}

		#mlb2-6899563 .ml-form-formContent input {
			border-radius: 0.125rem;
			font-size: 1rem;
			padding: 0.75rem 0.75rem 0.5rem 0.75rem;
		}

		#mlb2-6899563 .ml-form-embedPermissions {
			margin: 2rem 0;
		}

		#mlb2-6899563 .ml-form-embedPermissions h3,
		#mlb2-6899563 .ml-form-successContent h3 {
			font-size: 1.25rem;
			margin-bottom: 0.25rem;
		}

		#mlb2-6899563 .ml-form-embedPermissions p {
			font-size: 0.875rem;
		}

		#mlb2-6899563 button {
			font-size: 1.125rem;
			margin: 1rem 0 0 0;
			padding: 0.75rem;
		}

		#mlb2-6899563 .ml-form-embedPermissionsOptionsCheckbox label {
			font-size: 0.875rem;
			gap: 0.75rem;
			margin: 1rem auto 0 auto;
			width: 90%;
		}

		#mlb2-6899563 .ml-form-embedPermissionsOptionsCheckbox input {
			margin-top: 0.125rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#mlb2-6899563 {
			margin: 2.5rem auto;
			width: 25rem;
		}

		#mlb2-6899563 .ml-form-embedContent h2 {
			font-size: 3.25rem;
		}

		#mlb2-6899563 .ml-form-embedContent p,
		#mlb2-6899563 .ml-form-successContent p {
			font-size: 1rem;
			margin: 0 auto 0.25rem auto;
			width: 90%;
		}

		#mlb2-6899563 .ml-form-wrapper {
			border-radius: 0.5rem;
		}

		#mlb2-6899563 .ml-block-form {
			margin-top: 1.5rem;
		}

		#mlb2-6899563 .ml-form-formContent {
			gap: 0.75rem;
		}

		#mlb2-6899563 .ml-form-formContent input {
			border-radius: 0.125rem;
			font-size: 1rem;
			padding: 0.75rem 0.75rem 0.5rem 0.75rem;
		}

		#mlb2-6899563 .ml-form-embedPermissions {
			margin: 2rem 0;
		}

		#mlb2-6899563 .ml-form-embedPermissions h3,
		#mlb2-6899563 .ml-form-successContent h3 {
			font-size: 1.25rem;
			margin-bottom: 0.25rem;
		}

		#mlb2-6899563 .ml-form-embedPermissions p {
			font-size: 0.875rem;
		}

		#mlb2-6899563 button {
			font-size: 1.125rem;
			margin: 0.5rem 0 0 0;
			padding: 0.5rem;
		}

		#mlb2-6899563 .ml-form-embedPermissionsOptionsCheckbox label {
			font-size: 0.875rem;
			gap: 0.75rem;
			margin: 1rem auto 0 auto;
			width: 90%;
		}

		#mlb2-6899563 .ml-form-embedPermissionsOptionsCheckbox input {
			margin-top: 0.125rem;
		}
	}

	@media only screen and (min-width: 1280px) {
	}

	@media only screen and (min-width: 1536px) {
	}
</style>
