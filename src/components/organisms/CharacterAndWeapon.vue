<template>
  <v-row>
    <v-col class="py-0">
      <v-card>
        <v-card-title>キャラクター</v-card-title>
        <InputCharacter @change:character="changeCharacter" />
      </v-card>
    </v-col>
    <v-col class="py-0">
      <v-card>
        <v-card-title>武器</v-card-title>
        <InputWeapon ref="weapon" :weapon_type="weapon_type" @change:weapon="changeWeapon" />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import InputCharacter from "../molecules/InputCharacter";
import InputWeapon from "../molecules/InputWeapon";

export default {
  name: "CharacterAndWeapon",
  components: {
    InputCharacter,
    InputWeapon
  },
  data() {
    return {
      weapon_type: "",
      character_attack: 0,
      character_attack_bonus: 0,
      character_critical_rate: 0,
      character_critical_damage: 0,
      weapon_attak: 0,
      weapon_attack_bonus: 0,
      weapon_critical_rate: 0,
      weapon_critical_damage: 0
    };
  },
  methods: {
    changeCharacter: function(value) {
      this.weapon_type = value.weapon_type;
      // weapon_typeの変更をInputWeaponへ知らせる
      this.$refs.weapon.selectWeaponType(value.weapon_type);

      this.character_attack = value.atk;
      this.character_attack_bonus = 0;
      // キャラクターの会心率はデフォルト5%ある
      this.character_critical_rate = 0.05;
      // キャラクターの会心ダメージはデフォルト50%ある
      this.character_critical_damage = 0.5;

      switch (value.special_type) {
        case "攻撃力(%)":
          this.character_attack_bonus = value.special_value;
          break;
        case "会心率(%)":
          this.character_critical_rate += value.special_value;
          break;
        case "会心ダメージ(%)":
          this.character_critical_damage += value.special_value;
          break;
      }

      this.emitBaseAttack();
      this.emitAttackBonus();
      this.emitCriticalRate();
      this.emitCriticalDamage();
    },
    changeWeapon: function(value) {
      this.weapon_attak = value.atk;
      this.weapon_attack_bonus = 0;
      this.weapon_critical_rate = 0;
      this.weapon_critical_damage = 0;

      switch (value.special_type) {
        case "攻撃力(%)":
          this.weapon_attack_bonus = value.special_value;
          break;
        case "会心率(%)":
          this.weapon_critical_rate += value.special_value;
          break;
        case "会心ダメージ(%)":
          this.weapon_critical_damage += value.special_value;
          break;
      }

      this.emitBaseAttack();
      this.emitAttackBonus();
      this.emitCriticalRate();
      this.emitCriticalDamage();
    },
    emitBaseAttack() {
      this.$emit(
        "change:base_attack",
        this.character_attack + this.weapon_attak
      );
    },
    emitAttackBonus() {
      this.$emit(
        "change:attack_bonus",
        this.character_attack_bonus + this.weapon_attack_bonus
      );
    },
    emitCriticalRate() {
      this.$emit(
        "change:critical_rate",
        this.character_critical_rate + this.weapon_critical_rate
      );
    },
    emitCriticalDamage() {
      this.$emit(
        "change:critical_damage",
        this.character_critical_damage + this.weapon_critical_damage
      );
    }
  }
};
</script>