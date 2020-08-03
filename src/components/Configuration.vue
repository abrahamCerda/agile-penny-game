<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12" v-show="loading">
                Cargando...
            </div>
            <div class="col-12" v-show="!loading">
                <h1 class="instructions-title text-center">
                    ¡Bienvenido al juego de de las monedas!
                </h1>
                <p class="instructions">
                    Para jugar este juego, sigue las instrucciones...
                </p>
            </div>
            <div class="col-auto" v-show="!loading">
                <el-form :model="form" ref="form" :rules="rules">
                    <el-form-item prop="number_of_players"
                                  label="Número de jugadores">
                        <el-input-number v-model="form.number_of_players" controls-position="right"
                                         :min="min_number_of_players" :max="max_number_of_players"></el-input-number>
                    </el-form-item>
                    <el-form-item prop="total_number_of_coins"
                                  label="Número total de monedas">
                        <el-input-number v-model="form.total_number_of_coins" controls-position="right"
                                         :min="min_number_of_coins">
                        </el-input-number>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="generateRounds">Generar Rondas</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div clas="col-auto" v-if="!loading && rounds_generated">
                <p>
                    Rondas
                </p>
                <div class="row" v-for="(round, index) in rounds"
                     :key="round.key">
                    <div class="col-6">
                        <p v-if="round.number_of_coins > 1">
                            Lotes de {{round.number_of_coins}} monedas en la ronda {{index + 1}}
                        </p>
                        <p v-else>
                            Lotes de {{round.number_of_coins}} moneda en la ronda {{index + 1}}
                        </p>
                    </div>
                    <div class="col-6">
                        <el-button class="ml-2" type="danger" icon="el-icon-delete" circle
                                   @click.prevent="removeRound(round)" v-if="index !== 0">
                        </el-button>
                    </div>
                </div>
                <el-button type="primary" @click="play">Jugar</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Configuration",
        data: () => {
            return {
                loading: false,
                rounds_generated: false,
                max_number_of_players: 5,
                min_number_of_players: 2,
                min_number_of_coins: 20,
                rounds: [],
                form: {
                    number_of_players: 1,
                    total_number_of_coins: 20,
                },
                rules: {
                    number_of_players: [
                        {required: true, message: 'Debes ingresar el número de jugadores', trigger: ['change', 'blur']},
                        {type: 'integer', min: 1, max: 5, message: 'El número de jugadores debe ser mayor a 1 y menor o igual que 5',
                            trigger: ['change', 'blur']}
                    ]
                }
            }
        },
        methods: {
            removeRound(round){
                const roundIndex = this.rounds.indexOf(round);
                if(roundIndex !== -1){
                    this.rounds.splice(roundIndex, 1);
                }
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            },
            generateRounds(){
                this.loading = true;
                this.rounds_generated = false;
                this.rounds = [];
                this.rounds.push({
                    key: this.form.total_number_of_coins,
                    number_of_coins: this.form.total_number_of_coins,
                });
                let i = 2;
                let quotient = Math.floor(this.form.total_number_of_coins/i);
                let remainder = Math.floor(this.form.total_number_of_coins%i);
                while(quotient >= 1){
                    quotient = Math.floor(this.form.total_number_of_coins/i);
                    remainder = Math.floor(this.form.total_number_of_coins%i);
                    if(remainder === 0){
                        this.rounds.push({
                            key: quotient,
                            number_of_coins: quotient,
                        });
                    }
                    i = i + 2;
                }
                this.rounds_generated = true;
                this.loading = false;
            },
            play(){
                this.$emit('play', {
                    rounds: this.rounds,
                    number_of_players: this.form.number_of_players,
                    total_number_of_coins: this.form.total_number_of_coins,
                });
            }
        }
    }
</script>

<style scoped>
</style>