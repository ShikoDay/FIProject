<template>
  <div id="before-load">Идёт загрузка...</div>
  <h2>Карточки пользователей</h2>
  <div id="app">
    <div class="card" v-for="user in users" :key="user.id.value">
      <img class="photo" :src="user.picture.thumbnail" alt="photo" />

      <div>
        {{ user.name.first }}
        {{ user.name.last }}
      </div>
      Пол: {{ user.gender }}<br />
      Возраст: {{ user.registered.age }}<br />
      Дата рождения: {{ user.registered.date }}
      <div>
        Адрес: {{ user.location.country }}, {{ user.location.city }},
        {{ user.location.street.name }},
        {{ user.location.street.number }}
      </div>
      Email: <a class="email" href="#">{{ user.email }}</a
      ><br />
      Телефон: {{ user.phone }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},

  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this.users = data.results;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  margin-bottom: 20px;
  border: 3px solid #155c06;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  margin-left: 10px;
  background-color: #e4eaed;
}

.photo {
  border: 2px solid #155c06;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin-top: 10px;
}

.email {
  color: black;
  text-decoration: 0;
}

#before-load {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #155c06;
  z-index: 1501;
  border: 5px solid #155c06;
  color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
}

.before-load__logo,
.before-load__preloader {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
}

.before-load__logo {
  width: 200px;
  top: 75px;
}

.before-load__preloader {
  width: 64px;
  height: 64px;
  top: 0;
}
</style>
